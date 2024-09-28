import React from "react";
import {motion} from "framer-motion"
const WelcomeScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center items-center">
       <motion.div  initial={{opacity:1,x:-800,scale:1}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:800,damping:150,}} >
        <h1 className="text-2xl md:text-4xl font-light mb-4">

          WELCOME TO <span className=" text-prim">UTKARSH</span> 2024
        </h1>
        </motion.div>
        <motion.div  initial={{opacity:1,x:800,scale:1}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:800,damping:150}} >
        <h2 className="text-6xl md:text-7xl font-bold mb-4 text-prim">
          GALLERY
        </h2>
        </motion.div>
        <motion.div  initial={{opacity:1,x:0,y:800,scale:1}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:800,damping:150}} >
        <p className="text-lg md:text-2xl mb-8 w-full md:w-[40%] text-center mx-auto ">
          Explore our vibrant fest gallery showcasing the excitement of cultural
          activities, thrilling games, and intense coding contests! Experience
          the energy and creativity captured in every moment.
        </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
