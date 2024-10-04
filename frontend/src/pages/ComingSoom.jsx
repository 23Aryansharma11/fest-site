import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const title = `Coming  Soon`;
  const subtitle = "Registrations will begin soon!";
  const launchDate = "November 2024";

  // Animation variant for each letter in title
  const letterVariants = {
    hidden: { opacity: 0, y: -100 }, // Start from above the viewport
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1 + 0.5, // Stagger the delay based on the index
      },
    }),
  };

  // Animation variant for the launch date
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below the viewport
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1 + 0.5, // Stagger the delay based on the index
      },
    }),
  };

  // New animation variant for subtitle
  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start smaller and invisible
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1 + 0.5, // Stagger the delay based on the index
      },
    }),
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center w-full px-4 sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <div className="hidden md:flex justify-center">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass the index to use in the animation
              className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[8rem] inline-block text-center"
              style={{
                position: "relative", // Set position to relative for falling effect
                fontFamily: "marine corps",
                letterSpacing: "0.1em", // Adjusted letter spacing
              }}
            >
              {letter === "g" ? `${letter}\u00A0` : letter}
            </motion.span>
          ))}
        </div>
        <div className="md:hidden sm:flex sm:justify-center sm:flex-row">
          <div className="flex flex-col sm:flex-row">
            {title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass the index to use in the animation
                className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] inline-block"
                style={{
                  position: "relative", // Set position to relative for falling effect
                  fontFamily: "marine corps",
                  letterSpacing: "0.1em", // Adjusted letter spacing
                }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    custom={letterIndex} // Pass the index to use in the animation
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animate the subtitle with new animation variant */}
        <motion.p
          className="text-lg text-center sm:text-xl mb-4"
          variants={subtitleVariants} // Use the new variant for subtitle
          initial="hidden"
          animate="visible"
          custom={1} // Adding a custom index for staggered animation
        >
          {subtitle}
        </motion.p>

        {/* Animate the launch date */}
        <motion.div
          className="bg-gray-800 py-2 px-6 rounded-full transition-all duration-1000 delay-500"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2} // Adding a custom index for staggered animation
        >
          <span className="text-gray-400">Launching in</span>{" "}
          <span className="text-white font-semibold">{launchDate}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
