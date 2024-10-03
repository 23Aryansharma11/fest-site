import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ title, description }) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title with Icon */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="gradient-text text-2xl">&gt;&gt;</div>
        <h3 className="text-2xl font-bold hover:gradient-text transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Section;
