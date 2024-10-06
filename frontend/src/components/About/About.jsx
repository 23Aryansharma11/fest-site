import { motion } from "framer-motion";
import Section from "./Helper/Section";
import robotImage from "../../assets/atlantus.png";
import useOnScreen from "../../hooks/useOnScreen.js"; // Adjust the import path based on your project structure

const About = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 }); // 10% visibility triggers the animation

  return (
    <div className="bg-black p-4 md:p-12 text-white sm:mt-[15rem]" ref={ref}>
      {/* About Heading */}
      <motion.h1
        className="text-6xl gradient-text md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl gradient-text font-semibold">
            UIT&apos;s Techfest
          </h1>
          <h1 className="text-4xl gradient-text md:text-5xl font-bold my-6 ">
            UTF 2024
          </h1>
          <div className="flex items-start mb-8">
            <div className="gradient-text w-1 h-auto mr-4"></div>
            <p className="text-lg leading-relaxed">
              UTF, short for UIT's Tech Fest, is the largest technical festival
              in Himachal Pradesh University, hosted by the University Institute
              of Technology (UIT), Shimla. It brings together students,
              innovators, and tech enthusiasts from across the region to
              showcase their talents, ideas, and technical prowess. With a
              variety of competitive events, workshops, and exhibitions,
            </p>
          </div>

          {/* Section Components */}
          <Section
            title="Events"
            description="Experience the power of creativity and inspiration at our events. We bring together artists, thinkers, and innovators from across different fields to spark new ideas and share their stories. Whether you're a creative professional or just looking to be inspired, our events are the perfect place to find your next big idea."
          />
          <Section
            title="Lafz"
            description="LAFZ is a literary event hosted at UIT Shimla, celebrating creative writing, poetry, and spoken word performances. It provides a platform for participants to express their thoughts, emotions, and storytelling skills through various literary forms."
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
          <h1 className="text-3xl md:text-5xl  gradient-text font-bold my-6">
            UTF 2024
          </h1>
          <div className="flex items-start mb-8">
            <div className="bg w-1 h-auto mr-4"></div>
            <p className="text-lg leading-relaxed">
              UTF serves as a dynamic platform for participants to engage in
              cutting-edge technology, innovation, and collaboration. The fest
              fosters creativity and hands-on learning, making it a hallmark
              event in the state's academic and technical landscape. The fest
              also boasts a strong lineup of sponsors like Geektopia, Career
              Cafe, HP, Silicon Garage adding to the scale and impact of the
              event, making it a key highlight in the state’s academic and
              technical landscape.
            </p>
          </div>

          {/* Section Components */}
          <Section
            title="Hackathon"
            description="Our workshops are designed to help you grow your skills and advance your career. Led by expert instructors, each workshop focuses on a specific area of professional development, from project management and communication skills to design and programming."
          />
          <Section
            title="Guest Lecture"
            description="A guest lecture is a session where an external expert shares specialized knowledge, industry insights, or experiences with an audience, often students or professionals. It enriches learning by offering fresh perspectives, real-world examples, and networking opportunities, complementing regular coursework or training through interactive discussions and expert guidance."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
