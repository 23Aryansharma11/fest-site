import { Link } from "react-router-dom";
import "./events.css"
import { motion } from "framer-motion";
export const Sidebar = ({ value }) => {
  // console.log(props.props)

  return (
    <div className="text-left xs:w-72 lg:w-4/6 leading-8 xs:pl-0 md:pl-20" style={{ color: "white" }}>
    {/* Heading Animation */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <h1 className="events bg font-extrabold text-left  text-4xl " >
        EVENTS
      </h1>
    </motion.div>
  
    {/* Subheading Animation */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
    >
      <h2 className="font-Gantari font-normal text-2xl mt-4">
        {value.name}
      </h2>
    </motion.div>
  
    {/* Description Animation */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
    >
      <div className="border-l-4 border-yellow-400 mt-4 pl-3">
        <p className="text-base">
          {value.description}
        </p>
      </div>
    </motion.div>
  
    {/* Button Animation */}
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 120 }}
      className="mt-6"
    >
      <Link
        to="/events"
        className="px-6 py-3 border-2 gradient-border text-white   hover:text-black transition-all"
      >
        Explore more
      </Link>
    </motion.div>
  </div>
  );
};
