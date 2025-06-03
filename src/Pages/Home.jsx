import React from 'react'
import Hero from '../Component/Hero/Hero'
import Work from '../Component/Work/Work'
import About from '../Component/About/About'
import Client from '../Component/Client/Client'
import WorkFlow from '../Component/Servious/Workflow'
import Service from '../Component/Service/Service'
import Action from '../Component/CallToAction/Action'
import Fotter from '../Component/Fotter/Fotter'

function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <About/>
      <Client/>
      <Service/>
     <WorkFlow/>
     <Action/>
     <Fotter/>
    </div>
  )
}

export default Home
