import Card from "./Card";
import { motion } from "framer-motion";

// Container animation for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

// Child element animation (cards)
const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Advanced hover effect with 3D rotation and parallax movement
const hoverEffect = {
  scale: 1.1,
  rotateX: -10, // Tilt up on hover
  rotateY: 10, // Rotate on Y-axis for parallax effect
  boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)", // Create a stronger shadow to give depth
  transition: {
    type: "spring", // Using spring transition for smoothness
    stiffness: 200,
    damping: 10,
  },
};

// Bounce effect when hovering out
const bounceEffect = {
  scale: 0.95,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
};

const Section = ({ data }) => {
  return (
    <div
     
      className="container mx-auto px-4 py-10 grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-8"
    >
      {data.map((event, index) => (
        <motion.div
          key={index}
          className="flex justify-center"
          variants={childVariants}
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.3 }}
          whileHover={hoverEffect} // 3D rotation and parallax effect
          whileTap={bounceEffect} // Bounce effect when tapped/clicked
        >
          <Card
            key={index}
            title={event.title}
            fees={event.fees}
            image={event.image}
            description={event.description}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Section;
