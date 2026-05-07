<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid payload"]);
    exit();
}

$adminEmail = "Abbas@clinicalbiomarker.com";
$smtpUser = "Abbas@clinicalbiomarker.com";
$smtpPass = "Abbas@7269";
$smtpHost = "ssl://smtp.hostinger.com";
$smtpPort = 465;

$formName = isset($data['formName']) ? strip_tags($data['formName']) : 'Website Form';
$subject = isset($data['subject']) ? strip_tags($data['subject']) : "New Inquiry from $formName";

$message = "You have received a new submission from your website ($formName):\n\n";
foreach ($data as $key => $value) {
    if ($key === 'formName') continue;
    $cleanKey = ucfirst(preg_replace('/(?<!^)[A-Z]/', ' $0', $key));
    $cleanValue = strip_tags((string)$value);
    $message .= "** $cleanKey **\n$cleanValue\n\n";
}

function send_smtp_mail($to, $subject, $message, $from, $host, $port, $user, $pass, $data) {
    $crlf = "\r\n";
    $socket = fsockopen($host, $port, $errno, $errstr, 30);
    if (!$socket) {
        return false;
    }

    function server_parse($socket, $expected_response) {
        $server_response = '';
        while (substr($server_response, 3, 1) != ' ') {
            if (!($server_response = fgets($socket, 256))) {
                return false;
            }
        }
        if (!(substr($server_response, 0, 3) == $expected_response)) {
            return false;
        }
        return true;
    }

    if (!server_parse($socket, "220")) return false;

    fwrite($socket, "EHLO hostinger.com" . $crlf);
    if (!server_parse($socket, "250")) return false;

    fwrite($socket, "AUTH LOGIN" . $crlf);
    if (!server_parse($socket, "334")) return false;

    fwrite($socket, base64_encode($user) . $crlf);
    if (!server_parse($socket, "334")) return false;

    fwrite($socket, base64_encode($pass) . $crlf);
    if (!server_parse($socket, "235")) return false;

    fwrite($socket, "MAIL FROM: <" . $from . ">" . $crlf);
    if (!server_parse($socket, "250")) return false;

    fwrite($socket, "RCPT TO: <" . $to . ">" . $crlf);
    if (!server_parse($socket, "250")) return false;

    fwrite($socket, "DATA" . $crlf);
    if (!server_parse($socket, "354")) return false;

    $replyTo = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : $from;
    
    $headers = "From: $from" . $crlf;
    $headers .= "To: $to" . $crlf;
    $headers .= "Subject: $subject" . $crlf;
    $headers .= "Reply-To: $replyTo" . $crlf;
    $headers .= "Content-Type: text/plain; charset=UTF-8" . $crlf;

    // Send headers followed by a blank line, then the message, then a period on its own line
    fwrite($socket, $headers . $crlf . $message . $crlf . "." . $crlf);
    if (!server_parse($socket, "250")) return false;

    fwrite($socket, "QUIT" . $crlf);
    fclose($socket);
    return true;
}

if (send_smtp_mail($adminEmail, $subject, $message, $smtpUser, $smtpHost, $smtpPort, $smtpUser, $smtpPass, $data)) {
    http_response_code(200);
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "SMTP failed to send."]);
}
?>
