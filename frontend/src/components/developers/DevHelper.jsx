import React from 'react'
import sujal from "./sujal2.jpg"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export const DevHelper = ({value}) => {
  return (
    <div style={{borderRadius:"10px", Width:"16rem"}} className='text-center xs:w-screen sm:w-auto  border-2 p-4  border-yellow-500'>
    <div style={{borderRadius:"50%",overflow:"hidden" ,border:"2px solid yellow",margin:"0 auto", height:"100px", width:"100px"}} >
        <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={value.image}></img>
    </div>
    <h2 className='my-3 text-2xl text-yellow-500'>{value.name}</h2>
    <p className='my-3 text-center '>{value.description}</p>
    <h4 className='my-3 text-center text-yellow-500'><b>{value.work}</b></h4>
    <div className='mt-6 d-flex gap-3 justify-center text-white'>
        <a href={value.insta}><FaInstagram/></a>
        <a href={value.linkedin}><FaLinkedin/></a>
        
    </div>
    </div>
  )
}
