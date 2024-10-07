
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
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/h7f8onjbjgb0qw16vihr.jpg",
    },
      {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/iy1qwvvy8invssddjb1b.jpg",
    },
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/y4smaigvesi29syyiuzu.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/tisdggdq24xttwsce88y.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/ip9tvpy5of6dxro3bqrq.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/xwghstgdcfpiqkhem9ll.jpg",
    },
  ];
  const images2 = [
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/wbika0kdq6ialclt3atu.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/wyliqcuri4b0zctbyneo.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/ftz0ind4f5qa4jar5z7p.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/lfmd0rszhzjmjy2nvcsu.jpg",
    },
    
  ];


  const images3 = [
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/qcl1efcktaw8sbehkezr.jpg",
    },
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/u1t4yus4rwdljjvhvixw.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/dqsfykjuou8elo7mmttp.jpg",
    },
    
   
  ];
  const images4 = [
  
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/ulm0b8hbfsnjrpvel9xy",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/bgfedxt6cthktt1cp4rd",
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
          ))}{images2.map((image, key) => (
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
          ))}{images3.map((image, key) => (
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
          ))}{images4.map((image, key) => (
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
