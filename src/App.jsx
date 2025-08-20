import { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <div className=' h-full w-full'>
      <Header />
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
