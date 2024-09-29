import { Link } from "react-router-dom"
import {motion} from "framer-motion"
export const Sidebar = ({value}) => {
    // console.log(props.props)
   
  return (
    <div className="text-left xs:w-72 lg:w-4/6 md-w-inherit leading-8 xs:pl-0 md:pl-20 " style={{color:"white"}}>
    <motion.div initial={{x:800,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.5}}>
    <h1 className="font-extrabold md:text-left    font-REM text-3xl xs:absolute xs:top-0 md:relative" style={{color:"#8c8c8c",transform:"translate(-50%,30%)",left:"50%" }}>EVENTS</h1>
    </motion.div>
    <motion.div initial={{y:-150,opacity:1}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}}>
    <h2 className='font-Gantari font-normal text-3xl mt-4'>{value.name}</h2>
    </motion.div>
    <motion.div initial={{y:150,opacity:1}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}}>
    <div className=" border-l-8 border-warning mt-4 ">
    <p className='text-base ml-3 '>{value.description}</p>
    </div>
    </motion.div>

    <div className="mt-3 ">
    <motion.div initial={{y:100,x:0,scale:0}} whileInView={{y:0,scale:1}} transition={{duration:1.5}}>
    
    <Link to="/events" className='px-4 py-1 border-2 border-blue-4px-4 py-2 border-2 border-blue-500 text-white   hover:scale-10500 text-white focus:outline-none inline-block'>Explore more</Link>
    </motion.div>
    
    </div>
   
   
    </div>
  )
}
