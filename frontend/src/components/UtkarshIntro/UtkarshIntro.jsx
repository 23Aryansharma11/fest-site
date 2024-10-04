import SpinningLogo from "./SpinningLogo";
import {motion} from "framer-motion"
import React from "react";
import Typed from 'typed.js';
import IntroPart from "./IntroPart";

const UtkarshIntro = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    var typed = new Typed('#element', {
       
        strings: [
          '<span className="text-6xl" id="wtf">WTF</span>',
          '<i className="italic text-6xl " id="it">It\'s <span className="text-6xl gradient-text" id="utf">UTF</span><i/> ',
         
          
        ],
      
        






        typeSpeed: 40,        // Speed at which the characters are typed (in milliseconds)
  backSpeed: 40,        // Speed at which the characters are erased
  backDelay: 500,      // Delay before starting to erase
  startDelay: 500,      // Delay before starting to type
  loop: true,           // Loop the animation
  loopCount: Infinity,  // Infinite looping
  showCursor: true,     // Show blinking cursor
  cursorChar: "|",      // Character for the cursor
  autoInsertCss: true,  // Automatically insert required CSS for blinking cursor
  fadeOut: true,        // Smooth fade-out when erasing text
  fadeOutDelay: 300,    // Delay before fading out


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
      <IntroPart />
    </main>
  );
};

export default UtkarshIntro;
