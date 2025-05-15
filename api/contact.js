// api/contact.js
import { json } from '@vercel/node';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Replace with your EmailJS user and template IDs
    const emailjsUserId = '2p-84Sh3_asu-Uc1z';
    const emailjsTemplateId = 'template_8smi8sh';
    const emailjsServiceId = 'service_f7oqgng';

    const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailjsServiceId,
        template_id: emailjsTemplateId,
        user_id: emailjsUserId,
        template_params: {
          name,
          email,
          message,
        },
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Your message has been sent!' });
    } else {
      return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
