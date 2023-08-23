const Nav = ({ section, changeSection }) => {

  return (
    <>
        <div className='Nav__logo'>
            <a href='#home'>Portfolio</a>
        </div>
        <ul className='Nav__links'>
            <li className={`Nav__link ${section === "0vw" ? "active" : ""}`}  onClick={() => changeSection("0vw")}>Home</li>
            <li className={`Nav__link ${section === "-100vw" ? "active" : ""}`} onClick={() => changeSection("-100vw")}>About</li>
            <li className={`Nav__link ${section === "-200vw" ? "active" : ""}`} onClick={() => changeSection("-200vw")}>Certifications</li>
            <li className={`Nav__link ${section === "-300vw" ? "active" : ""}`} onClick={() => changeSection("-300vw")}>Contact</li>
        </ul>
    </>
  )
}

export default Nav