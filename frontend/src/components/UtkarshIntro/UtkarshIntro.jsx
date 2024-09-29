import SpinningLogo from "./SpinningLogo";
import {motion} from "framer-motion"
import React from "react";
import Typed from 'typed.js';
const UtkarshIntro = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    var typed = new Typed('#element', {
       
        strings: [
          'WTF',
          '<i className="italic">It\'s<i/> <span id="utf">UTF</span>',
         
          
        ],
        loop: true,
        loopCount: Infinity,
        stringsElement: null,
        // escapeHTML: false,
        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 100,
      
        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 0,
      
        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 10,
      
        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,
      
        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,
      
        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 1000,
      
        

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className=" bg-darkbg text-white flex justify-center gap-16 md:justify-between flex-col md:flex-row h-screen ">
      <section className="flex justify-center items-center w-full md:w-1/2">
      <motion.div  initial={{opacity:0,x:-600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:100}} >
        <SpinningLogo />
        </motion.div>
      </section>
      <section className="w-full md:w-1/2 flex flex-col  justify-center gap-5 md:gap-10 px-5 mr-20 text-left text-pretty">
      <motion.div  initial={{opacity:1,x:800,scale:1}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:800,damping:150}} >
      <h1 className="text-4xl md:text-6xl font-bold italic "> <span id='element'className="italic"  ref={el} /></h1></motion.div>
        <motion.div initial={{opacity:0,x:0,y:600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:200}}>
        <h2 className="text-lg md:text-2xl md:leading-9 cabin">
          Welcome to Utkarsh, the largest techno-cultural fest in Himachal
          Pradesh! Hosted by{" "}
          <span className="text-blue-500 font-bold">
            University Institude of Technology
          </span>
          , HPU, Utkarsh attracts over{" "}
          <span className="text-[#8c8c8c] font-bold">5000</span> participants
          from North India. Since 2014, we have proudly completed 8 editions,
          featuring over 25 competitions, lectures, and shows. <br />{" "}
          <span className="text-[#8c8c8c]">
            Join us for an unforgettable experience with luminaries from around
            the world.
          </span>
        </h2>
        </motion.div>
      </section>
    </main>
  );
};

export default UtkarshIntro;
