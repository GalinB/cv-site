import React from 'react'

export default function Middle3({ darkMode }) {
  return (
    <div className={darkMode ? 'middle2' : 'darkMiddle2'}>
      <h1 className={darkMode ? 'middle2h1' : 'darkMiddle2h1'}>Projects</h1>
      <div className={darkMode ? 'wrapper' : 'darkWrapper'}>
        <h2 className="middle2h2">Coming Soon...</h2>
      </div>
    </div>
  )
}
