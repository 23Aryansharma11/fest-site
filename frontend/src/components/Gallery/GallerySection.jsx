
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
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/v1728230457/h7f8onjbjgb0qw16vihr.jpg",
    },
      {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/v1728230414/iy1qwvvy8invssddjb1b.jpg",
    },
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/v1728235788/y4smaigvesi29syyiuzu.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728230445/tisdggdq24xttwsce88y.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728128963/ip9tvpy5of6dxro3bqrq.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728129109/xwghstgdcfpiqkhem9ll.jpg",
    },
  ];
  const images2 = [
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/v1728128984/wbika0kdq6ialclt3atu.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728129067/wyliqcuri4b0zctbyneo.jpg",
    },
    
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728129017/ftz0ind4f5qa4jar5z7p.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728128981/lfmd0rszhzjmjy2nvcsu.jpg",
    },
    
  ];


  const images3 = [
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728232673/qcl1efcktaw8sbehkezr.jpg",
    },
    {
      imgUrl: "https://res.cloudinary.com/dofidva2t/image/upload/v1728230466/u1t4yus4rwdljjvhvixw.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728230446/dqsfykjuou8elo7mmttp.jpg",
    },
    
   
  ];
  const images4 = [
  
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728230430/ulm0b8hbfsnjrpvel9xy.jpg",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1728235526/bgfedxt6cthktt1cp4rd.jpg",
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
