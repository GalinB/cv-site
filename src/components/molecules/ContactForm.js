import React, { useState, useRef, useEffect } from 'react'

function ContactForm({ darkMode }) {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const modalRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      name: contactName,
      email,
      subject,
      message,
    }

    if (data['name'] && data['email'] && data['subject'] && data['message']) {
      fetch('https://galinbozhkov.com/api/send_email', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log('Success:', data)
          setSubmitted(true)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSubmitted(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalRef])

  return (
    <>
      <form onSubmit={handleSubmit} className={darkMode ? 'contactForm' : 'darkContactForm'}>
        <label htmlFor="contactName">Full Name:</label>
        <input
          type="text"
          id="contactName"
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
          className={darkMode ? 'inputForm' : 'darkInputForm'}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={darkMode ? 'inputForm' : 'darkInputForm'}
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className={darkMode ? 'inputForm' : 'darkInputForm'}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={darkMode ? 'inputMessage' : 'darkInputMessage'}
        />

        <button type="submit" className="cv">
          Send Message!
        </button>
      </form>

      {submitted && (
        <div ref={modalRef} className="modal">
          <p class="text_shadows">Message sent!</p>
        </div>
      )}
    </>
  )
}

export default ContactForm
