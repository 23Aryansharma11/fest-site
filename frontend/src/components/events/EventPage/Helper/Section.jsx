import Card from "./Card.jsx"
import {motion} from "framer-motion"
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,  // Set stagger time between each child animation
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};
const Section = ({ data }) => {
 
  
  return (
    <motion.div   variants={containerVariants}
    initial="hidden"
    whileInView="show">
    <div className="grid lg:grid-cols-5  md:grid-cols-2 gap-4 p-4 border-1 border-yellow-500 rounded-lg items-center justify-around place-items-center place-content-center h-full mt-10 mx-2 " >
     {data.map((event, index) => (
      <motion.div variants={childVariants}  whileInView="show"  // Child will animate when it is in view
        initial="hidden"  viewport={{  amount: 0.5 }}> <Card key={index} title={event.title} fees={event.fees} image={event.image} description={event.description} /> </motion.div>
      ))}
    </div>
    </motion.div>
  )
}

export default Section

