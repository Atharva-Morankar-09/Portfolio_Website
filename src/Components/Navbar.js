import React, { useState, useEffect } from 'react'

export default function Navbar(props) {

  const [open, setOpen] = useState(false)

  function hamburger() {
    setOpen(!open)
  }

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth > 810) {
      setOpen(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
    <nav className={props.bg ? "navbarW" : "navbarB"}>
      <div className='name'>
        <a href='#'>Atharva Morankar</a>
      </div>
      <div className={open ? "toggleBtn cross" : "toggleBtn"} onClick={hamburger}>
        <div className={props.bg ? "barW" : "barB"} />
      </div>
      <div className={open ? "navbarMenuActive" : "navbarMenu"}>
        <ul className={props.bg ? "menuW" : "menuB"}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Qualifications">Qualifications</a></li>
          <li><a href="#Projects">Projects</a></li>
          {/* <li><a href="#Blogs">Blogs</a></li> */}
          <li><a href="#ContactMe">Contact Me</a></li>
          <li><img src={props.bg ? "assets/moon.png" : "assets/sun.png"} onClick={props.changeBg}></img></li>
        </ul>
      </div>
    </nav>
  )
}
