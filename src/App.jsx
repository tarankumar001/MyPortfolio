import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import ServiceSummary from './Sections/ServiceSummary'
import About from './Sections/About'
import Works from './Sections/Works'
import ContactSummary from './Sections/ContactSummary'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <ServiceSummary/>
      <About/>
      <Works/>
      <ContactSummary/>
      <section id="home"className='min-h-screen'/>
      <section id="about"className='min-h-screen'/>
      <section id="about"className='min-h-screen'/>
      </div>
  )
}

export default App