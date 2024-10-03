import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SocialIconAnimation = ({ Icon, size = 16 }) => {
  return (
    <motion.div
      className="w-10 h-10  bg-yellow-600 rounded-full flex justify-center items-cente"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className=" flex items-center justify-center bg-yellow-600 rounded-full p-2 overflow-hidden"
        initial={{ opacity: 1, y: 0, x: 0 }}
        whileHover={{
          y: -50,
          x: -50,
          scale: 1.2,
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <Icon size={size} />
      </motion.div>
    </motion.div>
  );
};

SocialIconAnimation.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
};

export default SocialIconAnimation;
