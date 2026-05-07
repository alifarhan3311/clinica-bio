import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'Abbas@clinicalbiomarker.com',
    pass: 'Abbas@7269',
  },
});

app.post('/api/contact', async (req, res) => {
  const data = req.body;
  const formName = data.formName || 'Website Form';
  const subject = data.subject || `New Inquiry from ${formName}`;

  let message = `You have received a new submission from your website (${formName}):\n\n`;
  for (const [key, value] of Object.entries(data)) {
    if (key === 'formName') continue;
    const cleanKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    message += `** ${cleanKey} **\n${value}\n\n`;
  }

  const replyTo = data.email || 'Abbas@clinicalbiomarker.com';

  try {
    await transporter.sendMail({
      from: '"Bio-Clinica Forms" <Abbas@clinicalbiomarker.com>',
      to: 'Abbas@clinicalbiomarker.com',
      replyTo: replyTo,
      subject: subject,
      text: message,
    });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('SMTP Error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Node.js email server is running on http://localhost:${port}`);
});
