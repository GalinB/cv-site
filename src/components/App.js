import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Left from './leftdiv'
import Right from './rightdiv'
import Middle1 from './middle1'
import MainTemplate from './templates/MainTemplate/Main.template'
import Middle2 from './middle2'
import Middle3 from './middle3'
import Middle4 from './middle4'
import Middle5 from './middle5'
import Middle6 from './middle6'

function App() {
  const [laserModeState, setLaserModeState] = useState(false)
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const work = useRef(null)
  const middle5Ref = useRef(null)

  const scrollToSection = (sectionName) => {
    if (sectionName === 'Home') {
      home.current.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionName === 'About') {
      about.current.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionName === 'Projects') {
      projects.current.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionName === 'WorkHistory') {
      work.current.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionName === 'Contact') {
      middle5Ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <MainTemplate
      darkMode={darkMode}
      leftDrower={<Left laserMode={laserModeState} darkMode={darkMode} />}
      rightDrower={
        <Right scrollToSection={scrollToSection} darkModef={toggleDarkMode} darkMode={darkMode} />
      }
    >
      <Middle1
        ref={home}
        engageLaserMode={setLaserModeState}
        laserMode={laserModeState}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
      />
      <div ref={about}>
        <Middle2 darkMode={darkMode} />
      </div>
      <div ref={projects}>
        <Middle3 darkMode={darkMode} />
      </div>
      <div ref={work}>
        <Middle4 darkMode={darkMode} />
      </div>
      <div ref={middle5Ref}>
        <Middle5 darkMode={darkMode} />
      </div>
      <Middle6 darkMode={darkMode} />
    </MainTemplate>
  )
}

export default App
