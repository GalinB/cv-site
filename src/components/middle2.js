import React from 'react'

export default function Middle2({ darkMode }) {
  return (
    <div className={darkMode ? 'middle2' : 'darkMiddle2'}>
      <h1 className={darkMode ? 'middle2h1' : 'darkMiddle2h1'}>Who am I?</h1>
      <div className={darkMode ? 'wrapper' : 'darkWrapper'}>
        <h2 className="middle2h2">
          With an unwavering passion for technology and an insatiable drive to learn and grow, I am
          thrilled to embark on a new journey in front-end development. Leveraging my extensive
          7-year experience in sales, I am excited to bring a fresh perspective to the table and
          utilize my unique skillset to create innovative and user-centric designs. My solid
          foundation in JavaScript, HTML, CSS, and React has fueled my passion for coding and
          ignited a desire to apply my skills to real-world projects. I am eager to dive headfirst
          into new challenges and push the boundaries of what's possible in the ever-evolving world
          of technology. <br></br>
          <br></br>
          If this sounds exciting to you, let's talk!
        </h2>
      </div>
    </div>
  )
}
