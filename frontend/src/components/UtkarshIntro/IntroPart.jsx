import React from 'react'
import "./intro.css"
import{motion} from "framer-motion"
import Typed from 'typed.js';
const IntroPart = () => {
    
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
    <section className="w-full md:w-1/2 flex flex-col  justify-center gap-5 md:gap-10 px-5 mr-20 text-left text-pretty">
    <motion.div  initial={{opacity:1,x:800,scale:1}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:800,damping:150}} >
     <span id='element' className="italic font-bold md:text-6xl"  ref={el} ></span></motion.div>
      <motion.div initial={{opacity:0,x:0,y:600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:200}}>
      <h2 className="text-lg md:text-2xl md:leading-9 cabin">
        Welcome to UTF, the largest techno fest in Himachal
        Pradesh! Hosted by{" "}
        <span className="gradient-text font-bold">
          University Institude of Technology
        </span>
        , HPU, UTF attracts over{" "}
        <span className="gradient-text font-bold">5000</span> participants
        from North India. Since 2014, we have proudly completed 8 editions,
        featuring over 25 competitions, lectures, and shows. <br />{" "}
        <span className="gradient-text">
          Join us for an unforgettable experience with luminaries from around
          the world.
        </span>
      </h2>
      </motion.div>
    </section>
  )
}

export default IntroPart