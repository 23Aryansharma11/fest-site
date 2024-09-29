import React, { useState } from "react";
import EventCarousel from "./EventCarousel.jsx";
import nfs from "../../assets/nfs.jpeg"
import chess from "../../assets/chess.jpg"
import pubg from "../../assets/pubg.jpg"
import { Sidebar } from "./Sidebar.jsx";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {motion} from "framer-motion"
// const Events = () => {
//   return (
//     <div className="space-y-4">
//       <h1 className="md:text-6xl text-prim text-left ml-5">Events</h1>
//       <div className="px-5 relative">
//       <EventCarousel />
//       </div>
//     </div>
//   );
// };
const Events=()=>{
  const [count,setCount]=useState(0)
  const data=[{
name:"NFS",
description:"Get ready to rev your engines and feel the adrenaline rush in the world of Need for Speed where speed meets excitement and every second counts!",
img:nfs,
  },
  {
    name:"Chess",
    description:"Prepare to sharpen your mind and strategize your moves at the ultimate chess event—where every decision counts and only the best will checkmate their way to victory",
    img:chess,
      },
      {
        name:"BGMI",
        description:"Gear up and get ready for the ultimate Battlegrounds Mobile India showdown—where strategic gameplay, intense battles, and only the strongest will emerge victorious!",
        img:pubg,
          }]
const increase=()=>{
  if(count==2){
    setCount(0)
  }else{
setCount(count=>count+1)
  }
}
const decrease=()=>{
  if(count==0){
    setCount(2)
  }else{
  setCount(count=>count-1)
  }
  }
  return (
    <>
    <div className="d-flex lg:justify-normal xs:items-center xs:flex-col md:flex-row xs:relative sm:justify-center lg:pl-64 md:justify-center">
    <motion.div initial={{opacity:0,scale:0,}} transition={{
        duration: 1, // Slow down the animation to 2 seconds
        // ease: "easeInOut" // Optional easing function
      }}  whileInView={{opacity:1,scale:1}}>
     <div className="xs:mt-14 md:mt-0 w-80 min-h-56 overflow-hidden relative object-contain">
      <button className="absolute right-0 top-24 bg-transparent text-3xl p-0" onClick={increase}><IoIosArrowDroprightCircle/></button>
      <button className="absolute left-0 top-24 p-0 bg-transparent text-3xl" onClick={decrease}><IoIosArrowDropleftCircle></IoIosArrowDropleftCircle></button>

      <div className="w-full h-full object-cover">
        <img className="min-h-56 object-cover" src={data[count].img}></img>
      </div>

     </div>

</motion.div>
<Sidebar value={data[count]}/>
    </div>


    </>
  )
}

export default Events;
