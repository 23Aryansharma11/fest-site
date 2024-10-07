import { MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hexagon } from "../../Animation/Hexagon";
const IntroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
     <Hexagon/>
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <motion.div
        initial={{ opacity: 1, x: -800, scale: 1 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 800, damping: 150 }}
        >
          <h1 className="text-3xl  md:text-5xl font-bold mb-4">
            WELCOME TO UTF 2024
          </h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 1, x: 800, scale: 1 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 800, damping: 150 }}
        >
          <h2 className="text-6xl md:text-7xl event font-bold mb-4 gradient-text">
            EVENTS
          </h2>
        </motion.div>
        <motion.div
           initial={{ opacity: 1, x: 0, y: 800, scale: 1 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 800, damping: 150 }}
        >
          <p className="text-lg md:text-2xl mb-8 md:w-[40%] text-center mx-auto">
            Experience a dynamic tech fest with drones, robots, interactive
            games, and cutting-edge innovation on display!
          </p>
          <Link
            to="/comingsoon"
            className="px-6 py-3 bg text-white font-bold rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
