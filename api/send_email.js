import { sendEmail } from '../utils/sendEmailUtils.js'

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle OPTIONS (preflight) requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

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
