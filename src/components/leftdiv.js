import React, { useState, useEffect, useRef } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import ImageHover from './ImageHover'

export default function Left({ laserMode, darkMode }) {
  const separator = <div className={darkMode ? 'separator' : 'darkSeparator'}></div>
  const backgroundImageUrl2 = laserMode ? '/pics/explosion2.gif' : ''

  const cvRef = useRef(null)

  // Use useEffect to log the position of the "cv" element when the component mounts
  useEffect(() => {
    const cvElement = cvRef.current
    if (cvElement) {
      const cvRect = cvElement.getBoundingClientRect()
      console.log(cvRect)
    }
  }, [])

  return (
    <div className={darkMode ? 'leftdiv' : 'darkLeftdiv'} id="leftdiv">
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl2})`,
          display: 'flex',
          justifyContent: 'center',
          backgroundSize: 'cover',
          marginLeft: '20%',
          marginRight: '20%',
          borderRadius: '50%',
        }}
      >
        <ImageHover
          initialImage="/pics/gbpic.jpg"
          hoverImage="/pics/laser-eyes-left.png"
          className="gbpic"
          laserMode={laserMode}
        />
      </div>
      <h1 className="mainh1">Galin Bozhkov</h1>
      <h1 className="frend">Front End Developer</h1>
      <div className="sButtons">
        <a href="https://www.facebook.com/galin.bozhkov" className="icons">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/galin-bozhkov/" className="icons">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/galinbozhkov/" className="icons">
          <BsInstagram />
        </a>
      </div>
      {separator}
      <h1 className="mainh1">Front End Skills</h1>
      <div className="skills">
        <h2>React</h2>
        <div className="languageSkillr"></div>
        <h2>Javascript</h2>
        <div className="languageSkilljs"></div>
        <h2>HTML</h2>
        <div className="languageSkill"></div>
        <h2>CSS</h2>
        <div className="languageSkill"></div>
      </div>
      {separator}
      <h1 className="mainh1">Sales Skills</h1>
      <div className="skills">
        <h2>Negotiation</h2>
        <div className="languageSkill"></div>
        <h2>Lead Generation</h2>
        <div className="languageSkill"></div>
        <h2>Account Management</h2>
        <div className="languageSkill"></div>
        <h2>Business Development</h2>
        <div className="languageSkill"></div>
      </div>
      {separator}
      <h1 className="mainh1">Languages</h1>
      <div className="skills">
        <h2>English</h2>
        <div className="languageSkill"></div>
        <h2>Bulgarian</h2>
        <div className="languageSkill"></div>
        <h2>French</h2>
        <div className="languageSkillFr"></div>
      </div>
      {separator}
      <div className="cv" ref={cvRef} onClick={handleDownloadCv}>
        Download CV 📧
      </div>
    </div>
  )

  async function handleDownloadCv(evt) {
    const response = await fetch('https://galinbozhkov.com/api/get_cv')

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status)
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    const contentDisposition = response.headers.get('content-disposition')
    let fileName = 'Galin_Bozhkov_-_Front_End_Developer_.pdf'
    if (contentDisposition) {
      const fileNameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
      if (fileNameMatch.length > 1) {
        fileName = fileNameMatch[1].replace(/['"]/g, '')
      }
    }
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
