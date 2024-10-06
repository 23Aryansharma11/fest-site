import React, { useState } from "react";

import { Sidebar } from "./Sidebar.jsx";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Events = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      name: "NFS",
      description:
        "Get ready to rev your engines and feel the adrenaline rush in the world of Need for Speed where speed meets excitement and every second counts!",
      img: "https://res.cloudinary.com/dofidva2t/image/upload/v1722049947/nfs_gbtjzc.jpg",
    },
    {
      name: "Chess",
      description:
        "Prepare to sharpen your mind and strategize your moves at the ultimate chess event—where every decision counts and only the best will checkmate their way to victory",
      img: "https://res.cloudinary.com/dofidva2t/image/upload/v1722049946/chess_ctgg7z.jpg",
    },
    {
      name: "BGMI",
      description:
        "Gear up and get ready for the ultimate Battlegrounds Mobile India showdown—where strategic gameplay, intense battles, and only the strongest will emerge victorious!",
      img: "https://res.cloudinary.com/dofidva2t/image/upload/v1728236243/ubrj8qxrtgdq88xzmh5a.jpg",
    },
  ];
  const increase = () => {
    if (count == 2) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
  };
  const decrease = () => {
    if (count == 0) {
      setCount(2);
    } else {
      setCount((count) => count - 1);
    }
  };
  return (
    <>
      <div className="d-flex lg:justify-normal xs:items-center xs:flex-col md:flex-row xs:relative sm:justify-center lg:pl-64 md:justify-center">
  {/* Carousel Container with Motion */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <div className="xs:mt-14 md:mt-0 w-80 min-h-56 overflow-hidden relative object-contain">
      
      {/* Right Arrow Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      className="absolute right-0 top-24 bg-transparent text-3xl p-0 z-10"
        onClick={increase}
      >
        <IoIosArrowDroprightCircle />
      </motion.button>

      {/* Left Arrow Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute z-10 left-0 top-24 p-0 bg-transparent text-3xl"
        onClick={decrease}
      >
        <IoIosArrowDropleftCircle />
      </motion.button>

      {/* Carousel Image with Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full object-cover"
      >
        <img
          className="min-h-56 object-cover"
          src={data[count].img}
          alt="carousel"
        />
      </motion.div>
    </div>
  </motion.div>

  {/* Sidebar Component for Details */}
  <Sidebar value={data[count]} />
</div>
    </>
  );
};

export default Events;
