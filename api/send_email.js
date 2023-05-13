import { sendEmail } from '../utils/sendEmailUtils.js'

module.exports = (req, res) => {
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
