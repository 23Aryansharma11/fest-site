import robotImage from "../../assets/robot_spy-B22OfTYi.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger between children
    },
  },
};

  const childVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const images = [
    {
      imgUrl:
        "https://i.pinimg.com/564x/59/4d/dc/594ddc10737934b1dbe7b1b4354aa3ae.jpg",
    },
    {
      imgUrl: robotImage,
    },
    {
      imgUrl:
        "https://i.pinimg.com/564x/c1/3c/c8/c13cc8b2e0c21cf637ec362e1d45718d.jpg",
    },
  ];

  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ amount: 0.2, once: true }} // Load once in view
      >
        <div className="h-full w-full flex flex-wrap justify-evenly items-center gap-5">
        {images.map((image, key) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileInView="show"
              initial="hidden"
              whileHover="hover"
              viewport={{ amount: 0.5 }}
            >
              <div className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2">
                <img
                  src={image.imgUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}{images.map((image, key) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileInView="show"
              initial="hidden"
              whileHover="hover"
              viewport={{ amount: 0.5 }}
            >
              <div className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2">
                <img
                  src={image.imgUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}{images.map((image, key) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileInView="show"
              initial="hidden"
              whileHover="hover"
              viewport={{ amount: 0.5 }}
            >
              <div className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2">
                <img
                  src={image.imgUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}{images.map((image, key) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileInView="show"
              initial="hidden"
              whileHover="hover"
              viewport={{ amount: 0.5 }}
            >
              <div className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2">
                <img
                  src={image.imgUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}{images.map((image, key) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileInView="show"
              initial="hidden"
              whileHover="hover"
              viewport={{ amount: 0.5 }}
            >
              <div className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2">
                <img
                  src={image.imgUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
