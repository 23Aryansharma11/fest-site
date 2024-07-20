import React from 'react'
import Nav from '../components/navbar/Nav.jsx'

import Events from '../components/events/Events.jsx'
import  {Past } from '../components/pasperformers/Past.jsx'
import About from '../components/About/About.jsx'

const Home = () => {
  return (
    <div style={{width:"100%"}}>
    
        <Nav/>
        <About/>
        <Events/>
        
        <Past/>
    </div>
  )
}

export default Home