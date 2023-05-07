import './main.template.css'

export default function MainTemplate({ children, leftDrower, rightDrower, darkMode }) {
  return (
    <div className={`main-wrapper ${!darkMode ? 'darkMain-wrapper' : ''}`}>
      <div className="main-left-drower">{leftDrower}</div>
      <div className="main-content">{children}</div>
      <div className="main-right-drower">{rightDrower}</div>
    </div>
  )
}
