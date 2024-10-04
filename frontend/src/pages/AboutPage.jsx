import React from "react";
import { FaLaptopCode, FaUsers, FaChartLine } from "react-icons/fa";
import Nav from "../components/navbar/Nav";
import { DevHelper } from "../components/developers/DevHelper";
import developerData from "../Data/DevelopersData.json";
import data from "../Data/AboutPageData.json";
import boys from "../assets/photos/boy1.jpeg"
export const About = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="min-h-screen mt-[5rem] bg-gray-900 text-white flex flex-col justify-center items-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header Section */}
          <h1 className="text-5xl font-bold mb-6 text-gray-100 gradient-text">
            About UTF
          </h1>
          <p className="text-xl text-gray-400 mb-8 text-justify">
            <span className="text-[#B0B0B0] ">UIT Tech Fest </span>
            is the flagship technology event organized by the University
            Institute of Technology (UIT) Shimla. This annual fest brings
            together bright minds, tech enthusiasts, innovators, and industry
            leaders for an exciting showcase of cutting-edge technologies,
            inspiring ideas, and collaborative opportunities..
          </p>

          {/* Mission Statement Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 gradient-text">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              At TechWorld, we are dedicated to advancing the frontiers of
              technology by providing insightful analysis, comprehensive product
              reviews, and the latest news. Our mission is to inspire and guide
              tech enthusiasts with authentic, reliable, and in-depth content.
            </p>
          </section>

          {/* Values Section */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaLaptopCode className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Innovation
              </h3>
              <p className="text-gray-400">
                Shaping the future through groundbreaking technology insights
                and discoveries.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaUsers className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-400">
                Partnering with the tech community to foster innovation and
                share knowledge.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaChartLine className="text-purple-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Growth
              </h3>
              <p className="text-gray-400">
                Constantly evolving and improving to stay ahead in the
                fast-paced tech world.
              </p>
            </div>
          </section>

          {/* Tech Fest Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 gradient-text">
              Tech Fest 2024
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Join us for an exhilarating three-day Tech Fest packed with
              workshops, keynote sessions, live demonstrations, and networking
              opportunities with the industry’s brightest minds. Discover the
              latest trends in AI, blockchain, and robotics, and be part of an
              event that connects innovators, developers, and visionaries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mapping over the events data */}
              {Object.keys(data).map((category) => (
                <div
                  key={category}
                  className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-4 border-b input pb-2">
                    {category}
                  </h3>
                  <ul className="text-gray-300 text-xl space-y-2 list-inside list-none cursor-pointer">
                    {data[category].map((event, index) => (
                      <li
                        key={index}
                        className="hover:gradient-text transition duration-300"
                      >
                        {event.event}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Team Section */}
          <section className="mb-16 relative">
          {/* <img className="absolute" src={boys}></img> */}
            <h2 className="text-3xl h-full font-semibold gradient-text mb-8 border-b input pb-2 ">
              Meet the Developers
            </h2>
            <div className="md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-2 d-grid gap-3 justify-center ">
              {developerData.map((e, index) => (
                <DevHelper key={index} value={e} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold gradient-text mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Have questions or want to collaborate with us? We’re here to help!
              Feel free to reach out.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg text-white rounded-lg font-semibold  transition duration-300"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
