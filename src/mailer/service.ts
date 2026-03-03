import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.NODEMAILER_TOKEN;

const sendMail = () => {
  const client = new MailtrapClient({
    token: TOKEN,
  });

  const sender = {
    email: "hello@mrcook-backend.6qcdac.easypanel.host",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: "jcmcf2010@gmail.com",
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
    .then(console.log, console.error);

  return { sent: true };
};

export { sendMail };
