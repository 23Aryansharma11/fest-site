import Card from "./Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly reduce the delay for smoother flow
      duration: 0.5, // Faster overall transition
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = ({ data }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8"
    >
      {data.map((event, index) => (
        <motion.div
          variants={childVariants}
          key={index}
          className="flex justify-center"
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
    </motion.div>
  );
};

export default Section;
