import ImageHover from './ImageHover'

import React, { useRef, useState, forwardRef } from 'react'

export default forwardRef(({ engageLaserMode, laserMode, darkMode, scrollToSection }, ref) => {
  const backgroundImageUrl = laserMode ? '/pics/explosion1.gif' : ''

  return (
    <div
      ref={ref}
      className={darkMode ? 'middle1' : 'darkMiddle1'}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="wrapper2">
        <h1 className={darkMode ? 'middle1h1' : 'darkMiddle1h1'}>
          I'm Galin Bozhkov
          <br></br>
          Front-End Developer
        </h1>
        <h2 className={darkMode ? 'middle1h2' : 'darkMiddle1h2'}>
          Embrace change and never stop learning, for new beginnings can lead to incredible growth
          and success beyond your imagination.
        </h2>
        <button
          className="cv"
          onMouseEnter={() => {
            engageLaserMode(true)
          }}
          onMouseLeave={() => {
            engageLaserMode(false)
          }}
          onClick={() => {
            scrollToSection('Contact')
          }}
        >
          Hire Me ➡
        </button>
      </div>
      <ImageHover
        initialImage="/pics/gbpic2.png"
        hoverImage="/pics/laser-eyes1.png "
        className="gbpic2"
        laserMode={laserMode}
      />
    </div>
  )
})
