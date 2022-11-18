import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Qualifications from './Components/Qualifications'
import Projects from './Components/Projects'
import Blogs from './Components/Blogs'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import { useState } from 'react'
import Home from './Components/Home'

export default function App() {

  const [mode, setMode] = useState(true)

  function change(){
    setMode(prevMode => !prevMode)
}

  return (
    <>
       <Navbar 
          bg={mode}
          changeBg={change}
       />
       <Home bg={mode}/>
       <About bg={mode}/>
       <Qualifications bg={mode}/>
       <Projects bg={mode}/>
       {/* <Blogs bg={mode}/> */}
       <ContactMe bg={mode}/>
       <Footer bg={mode}/>
    </>
  );
}

