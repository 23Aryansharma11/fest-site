import { Link } from "react-router-dom";
import {motion } from "framer-motion"
const CarouselCard = ({ imageUrl, name, shortDescription, slug }) => {
  return (
    <div className=" md:w-full flex justify-center items-center">
      <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-40">
      
        <div
          className={`w-full md:w-1/2 h-80 flex justify-center items-center`}
        >
        <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}}>
          <img src={imageUrl} alt="" />
          </motion.div>
        </div>

        <span className="flex flex-col gap-10 w-full md:w-2/4 px-3 rounded-lg mt-5 md:mt-0">
          <span>
            <p className="font-bold text-2xl">{name}</p>
          </span>
          <span className="text-white  text-left border-l-4 pl-2 rounded-sm border-prim">
            {shortDescription}
          </span>
          <Link
            to={`/event/${slug}`}
            className="bg-transparent  text-prim border-2 w-[60%] self-center md:self-start border-prim py-3 rounded-md px-6 md:w-auto hover:text-prim"
          >
            Explore more
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
