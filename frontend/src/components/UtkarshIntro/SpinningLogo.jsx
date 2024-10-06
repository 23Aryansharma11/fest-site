import { motion } from "framer-motion";
import img from "../../assets/atlantus.png"; // Path to your image

const SpinningCoinLogo = () => {
  // Define the spin animation
  const spinAnimation = {
    rotateY: [0, 360], // Spin around Y-axis
    transition: {
      duration: 4,
      ease: "linear",
      repeat: Infinity, // Repeat infinitely
    },
  };

  return (
    <div className="flex justify-center items-center mt-[6rem] bg-gray-100">
      <motion.div
        className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000" // Increased size
        style={{ transformStyle: "preserve-3d" }} // Enable 3D transformations
        animate={spinAnimation}
      >
        {/* Front face */}
        <div className="absolute w-full h-full">
          <img
            src={img}
            alt="Coin Front"
            className="w-full h-full object-cover rounded-full" // Rounded for coin effect
          />
        </div>
        {/* Back face */}
        <div className="absolute w-full h-full transform rotate-y-180">
          <img
            src={img}
            alt="Coin Back"
            className="w-full h-full object-cover rounded-full" // Rounded for coin effect
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SpinningCoinLogo;
