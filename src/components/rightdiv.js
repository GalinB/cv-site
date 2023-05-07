import React, { useState } from 'react'
import { useEffect } from 'react'
import { BsMask, BsFillHouseFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { FaUniversity } from 'react-icons/fa'
import { MdWorkHistory, MdEmail } from 'react-icons/md'

export default function Right(props) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleClick2 = () => {
    props.darkModef()
  }

  const handleIconHover = (iconName) => {
    setShowModal(true)
    setModalContent(iconName)
  }

  const handleIconLeave = () => {
    setShowModal(false)
  }

  return (
    <div className={['main', props.darkMode ? 'rightdiv' : 'darkRightDiv'].join(' ')} id="rightdiv">
      <BsMask className={props.darkMode ? 'iconr' : 'darkIconr'} onClick={handleClick2} />
      <div className="riconr">
        <BsFillHouseFill
          className="iconr"
          onClick={() => {
            props.scrollToSection('Home')
          }}
          // onMouseEnter={() => handleIconHover('Home')}
          // onMouseLeave={handleIconLeave}
        />
        <BsFillInfoCircleFill
          className="iconr"
          onClick={() => {
            props.scrollToSection('About')
          }}
          // onMouseEnter={() => handleIconHover('About')}
          // onMouseLeave={handleIconLeave}
        />
        <FaUniversity
          className="iconr"
          onClick={() => {
            props.scrollToSection('Projects')
          }}
          // onMouseEnter={() => handleIconHover('Projects')}
          // onMouseLeave={handleIconLeave}
        />
        <MdWorkHistory
          className="iconr"
          onClick={() => {
            props.scrollToSection('WorkHistory')
          }}
          // onMouseEnter={() => handleIconHover('WorkHistory')}
          // onMouseLeave={handleIconLeave}
        />
        <MdEmail
          className="iconr"
          onClick={() => {
            props.scrollToSection('Contact')
          }}
          // onMouseEnter={() => handleIconHover('Contact')}
          // onMouseLeave={handleIconLeave}
        />
      </div>
      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  )
}
