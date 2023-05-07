import ContactForm from './molecules/ContactForm.js'
import React, { useState } from 'react'

export default function Middle5({ darkMode }) {
  return (
    <div className={darkMode ? 'middle2' : 'darkMiddle2'}>
      <h1 className="middle2h1">Contact Form</h1>
      <ContactForm darkMode={darkMode} />
    </div>
  )
}
