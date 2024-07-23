import Section from "./Helper/Section";
import robotImage from "../../assets/robot_spy-B22OfTYi.png"; // Ensure you have the robot image saved in your src folder

const About = () => {
  return (
    <div className="bg-black p-4 md:p-8">
      <h2 style={{color:"#FFbd00"}} className="text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center md:mb-6">
        About
      </h2>
      <div className="flex flex-col md:flex-row text-white">
        <div className=" md:w-1/3">
          <h1 className="text-xl">UIT&apos;s Techfest</h1>
          <h2 className="text-3xl md:text-5xl font-bold my-4 text-white">
            UTKARSH 2024
          </h2>
          <div className="flex justify-center items-start md:mb-8">
            <div className="bg-yellow-500 w-1 mr-4 self-stretch"></div>
            <p className="text-base md:text-lg mb-8">
              Cognizance, the congregation of the finest technical minds of the
              country is the annual technical fest of IIT Roorkee. It is a
              platform for your ideas to speak out loud and to promote the
              skills aiming to reach the pinnacle of your mind.
            </p>
          </div>

          <Section
            title="Events"
            description="Experience the power of creativity and inspiration at our events. We bring together artists, thinkers, and innovators from across different fields to spark new ideas and share their stories. Whether you're a creative professional or just looking to be inspired, our events are the perfect place to find your next big idea."
          />
          <Section
            title="Initiatives"
            description="At Cognizance, we're committed to driving positive change through innovation and collaboration. That's why we've launched several initiatives that are making a difference in our communities and beyond."
          />
        </div>
        <div className="hidden md:block md:w-1/3 md:flex md:flex-col md:items-center">
          <img src={robotImage} alt="Robot" className="mb-8 w-full max-w-sm" />
          
        </div>
        <div className="hidden md:block md:w-1/3 ">
          <h2 className="text-3xl md:text-5xl font-bold my-4 ">
            UTKARSH 2024
          </h2>
          <div className="flex justify-center items-start md:mb-8">
            <div className="bg-yellow-500 w-1 mr-4 self-stretch"></div>
            <p className="text-base md:text-lg mb-8">
              Cognizance, the congregation of the finest technical minds of the
              country is the annual technical fest of IIT Roorkee. It is a
              platform for your ideas to speak out loud and to promote the
              skills aiming to reach the pinnacle of your mind.
            </p>
          </div>
          <Section
            title="Workshops"
            description="Our workshops are designed to help you grow your skills and advance your career. Led by expert instructors, each workshop focuses on a specific area of professional development, from project management and communication skills to design and programming. Choose the workshop that's right for you and take your skills to the next level."
          />
          <Section
            title="Zonals"
            description="From the courts to the stage, the canvas to the classroom, our zonal events offer something for everyone. Whether you're a seasoned pro or a passionate amateur, you'll find a community that shares your passion for excellence and collaboration."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
