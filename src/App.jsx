import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { ThemeProvider } from './context/ThemeContext'


function App() {


  return (
    <ThemeProvider>
       <div className='overflow-hidden'>
          <Navbar />
          <Home/>
          <SocialLinks/>
          <About/>
          <Portfolio/>
          <Experience/>
          <Contact/>
       </div>
       </ThemeProvider>
        
  )
}

export default App