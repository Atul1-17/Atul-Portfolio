import { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'

function App() {
  

  return (
    <div className='bg-[rgb(236,244,243)] text-black/70 h-full w-full'>
      <Header />
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
    </div>
  )
}

export default App
