import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <section id="home"className='min-h-screen'/>
      <section id="about"className='min-h-screen'/>
      </div>
  )
}

export default App