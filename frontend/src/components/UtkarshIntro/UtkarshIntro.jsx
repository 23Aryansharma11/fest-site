import SpinningLogo from "./SpinningLogo";
import {motion} from "framer-motion"
import React from "react";
import Typed from 'typed.js';
import IntroPart from "./IntroPart";

const UtkarshIntro = () => {

 
  return (
    <main className=" bg-darkbg text-white flex justify-center gap-16 md:justify-between flex-col md:flex-row md:mt-[10rem] ">
      <section className="flex justify-center items-center w-full md:w-1/2">
      <motion.div  initial={{opacity:0,x:-600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:100}} >
        <SpinningLogo />
        </motion.div>
      </section>
      <IntroPart />
    </main>
  );
};

export default UtkarshIntro;
