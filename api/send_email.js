import { sendEmail } from '../utils/sendEmailUtils.js'
import { allowCors } from '../utils/corsUtils.js'

const sendEmail = async (req, res) => {
  // Handle other requests
  const { name, email, message } = req.body

  sendEmail({
    from: email,
    subject: `${name} (${email}) Wants To Contact You`,
    message,
  })
    .then((response) => res.status(200).send(response))
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = sendEmail
