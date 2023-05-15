import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({ path: '.env' })

// const gmailEmail = process.env.GMAIL_EMAIL
// const gmailPassword = process.env.GMAIL_PASSWORD

const { GMAIL_EMAIL: gmailEmail, GMAIL_PASSWORD: gmailPassword } = process.env

const emailClient = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

export const sendEmail = async ({ from, to, subject, message }) => {
  const mailOptions = {
    from: from || gmailEmail,
    to: to || gmailEmail,
    subject,
    text: message,
    html: `<p>${message}</p>`,
  }

  try {
    await emailClient.sendMail(mailOptions)
    return 'Email sent successfully'
  } catch (err) {
    console.error(err)
    throw new Error(`Error sending email: ${err}`)
  }
}
