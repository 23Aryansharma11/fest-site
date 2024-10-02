import { motion } from "framer-motion";
import Section from "./Helper/Section";
import robotImage from "../../assets/robot_spy-B22OfTYi.png";
import useOnScreen from "../../hooks/useOnScreen.js"; // Adjust the import path based on your project structure

const About = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 }); // 10% visibility triggers the animation

  return (
    <div className="bg-black p-4 md:p-12 text-white" ref={ref}>
      {/* About Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
        style={{ color: "#FFbd00" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-semibold">UIT&apos;s Techfest</h1>
          <h2 className="text-4xl md:text-6xl font-bold my-6 text-white">
            UTKARSH 2024
          </h2>
          <div className="flex items-start mb-8">
            <div className="bg-yellow-500 w-1 h-auto mr-4"></div>
            <p className="text-lg leading-relaxed">
              Cognizance, the congregation of the finest technical minds of the
              country, is the annual technical fest of IIT Roorkee. It is a
              platform for your ideas to speak out loud and to promote the
              skills aiming to reach the pinnacle of your mind.
            </p>
          </div>

          {/* Section Components */}
          <Section
            title="Events"
            description="Experience the power of creativity and inspiration at our events. We bring together artists, thinkers, and innovators from across different fields to spark new ideas and share their stories. Whether you're a creative professional or just looking to be inspired, our events are the perfect place to find your next big idea."
          />
          <Section
            title="Lafz"
            description="At Cognizance, we're committed to driving positive change through innovation and collaboration. That's why we've launched several initiatives that are making a difference in our communities and beyond."
          />
        </motion.div>

        {/* Center Column: Robot Image */}
        <motion.div
          className="hidden md:flex md:w-1/3 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <img src={robotImage} alt="Robot" className="w-full max-w-sm mb-8" />
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold my-6">UTKARSH 2024</h2>
          <div className="flex items-start mb-8">
            <div className="bg-yellow-500 w-1 h-auto mr-4"></div>
            <p className="text-lg leading-relaxed">
              Cognizance, the congregation of the finest technical minds of the
              country, is the annual technical fest of IIT Roorkee. It is a
              platform for your ideas to speak out loud and to promote the
              skills aiming to reach the pinnacle of your mind.
            </p>
          </div>

          {/* Section Components */}
          <Section
            title="Hackathon"
            description="Our workshops are designed to help you grow your skills and advance your career. Led by expert instructors, each workshop focuses on a specific area of professional development, from project management and communication skills to design and programming."
          />
          <Section
            title="Guest Lecture"
            description="From the courts to the stage, the canvas to the classroom, our zonal events offer something for everyone. Whether you're a seasoned pro or a passionate amateur, you'll find a community that shares your passion for excellence and collaboration."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
