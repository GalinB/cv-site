import fs from 'fs'
import path from 'path'

import { sendEmail } from '../utils/sendEmailUtils.js'
import { allowCors } from '../utils/corsUtils.js'

const ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g

async function whereCvDownloadFrom(req) {
  const ip = req.headers['x-forwarded-for'].match(ipRegex)[0] || req.connection.remoteAddress
  if (ip) {
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const responseData = await response.json()

    if (responseData['status'] === 'fail') {
      throw new Error(`Failed to find ip address ${ip}`)
    } else {
      return responseData
    }
  }
}

const getCv = async (req, res) => {
  try {
    const resp = await whereCvDownloadFrom(req)
    await sendEmail({
      subject: 'Someone is downloading your CV',
      message: [
        'Someone from: ',
        `Country: ${resp['country']}`,
        `City: ${resp['city']}`,
        `Zip: ${resp['zip']}`,
        `https://maps.google.com/?q=${resp['lat']},${resp['lon']}`,
        `IP: ${resp['query']}`,
      ].join('<br>'),
    })
  } catch (err) {
    console.log(err)
  }

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

module.exports = getCv
