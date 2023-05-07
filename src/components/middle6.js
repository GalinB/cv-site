import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

export default function Middle6({ darkMode }) {
  return (
    <div className={darkMode ? 'middle6' : 'darkMiddle6'}>
      <h1 className="middle6h1">
        {' '}
        <FaRegCopyright /> 2024 All Rights Reserved.Bozhkov
      </h1>
    </div>
  )
}
