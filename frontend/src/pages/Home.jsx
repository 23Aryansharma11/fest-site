import React from 'react'
import Nav from '../components/navbar/Nav.jsx'
import { Past } from '../components/pasperformers/Past.jsx'
import Events from '../components/events/Events.jsx'

const Home = () => {
  return (
    <div style={{width:"100%"}}>
    
        <Nav/>
      
        <Events/>
        
        <Past/>
    </div>
  )
}

export default Home