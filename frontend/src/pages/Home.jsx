
import Nav from '../components/navbar/Nav.jsx'

import Events from '../components/events/Events.jsx'
import  {Past } from '../components/pasperformers/Past.jsx'
import About from '../components/About/About.jsx'
import UtkarshIntro from '../components/UtkarshIntro/UtkarshIntro.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div style={{width:"100%"}} className='bg-black'>
    
        <Nav/>
        <UtkarshIntro />
        <About/>
        <Events/>
        
        <Past/>
        <Footer/>
    </div>
  )
}

export default Home