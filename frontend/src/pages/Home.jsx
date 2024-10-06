
import Nav from '../components/navbar/Nav.jsx'

import Events from '../components/events/Events.jsx'
import  {Past } from '../components/pasperformers/Past.jsx'
import About from '../components/About/About.jsx'
import UtkarshIntro from '../components/UtkarshIntro/UtkarshIntro.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { CgTrophy } from 'react-icons/cg'
import { Loading } from './Loading.jsx'
import { Particles } from '../components/Particles/Particles.jsx'

const Home = () => {
  

  return (
    <div style={{width:"100%"}} className='bg-black overflow-hidden'>
    <div className='overflow-hidden xs:h-[150vh] lg:h-[100vh] absolute'>
    <div className='  w-screen  top-[20rem]'>
        <Particles/>
        </div>
        </div>
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