import React from 'react'
import Hero from '../Component/Hero/Hero'
import Work from '../Component/Work/Work'
import About from '../Component/About/About'
import Client from '../Component/Client/Client'

function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <About/>
      <Client/>
    </div>
  )
}

export default Home
