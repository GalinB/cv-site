import fs from 'fs'
import path from 'path'

import { sendEmail } from '../utils/sendEmailUtils.js'

module.exports = (req, res) => {
  whereCvDownloadFrom(req).then((resp) => {
    sendEmail({ subject: 'Someone is downloading your CV', message: JSON.stringify(resp) })
  })

  const filepath = path.join(process.cwd(), 'data', 'Galin_Bozhkov_-_Front_End_Developer_.pdf')
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading file')
      return
    }

    res.setHeader('Content-Type', 'application/pdf')
    res.send(data)
  })
}

async function whereCvDownloadFrom(req) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  if (ip) {
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    return await response.json()
  }
}
