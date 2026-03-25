import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASSCODE, // no spaces
  },
});

const sendEmail = async (email, subject, html) => {
  const info = await transporter.sendMail({
    from: process.env.GMAIL_ID,
    to:email,
    subject,
    html,
  });
};

export default sendEmail;
