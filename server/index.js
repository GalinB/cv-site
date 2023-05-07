require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const nodemailer = require('nodemailer')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/contact', async function ({ body: { name, email, subject, message } }, res) {
  console.log('Contact Name:', name)
  console.log('Email:', email)
  console.log('Subject:', subject)
  console.log('Message:', message)

  // Create a transporter object using SMTP
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Your Name" <galin@bozhkov.com>', // sender address
    to: 'galin@bozhkov.com', // list of receivers
    subject: 'Somebody Wants To Contact You', // Subject line
    text: `Contact Name: ${name},
    Email: ${email},
    Subject: ${subject},
    Message: ${message}`,
  }

  // Send mail with defined transport object
  const p = new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        return reject({
          success: false,
          error,
        })
      }

      console.log('Message sent: %s', info.messageI)
      resolve({
        success: true,
      })
    })
  })

  const status = await p

  res.json(status)
})

app.listen(3001, function () {
  console.log('Server listening on port 3001')
})
