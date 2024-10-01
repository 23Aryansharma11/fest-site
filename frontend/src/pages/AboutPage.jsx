import React from "react";
import { FaLaptopCode, FaUsers, FaChartLine } from "react-icons/fa";
import Nav from "../components/navbar/Nav";

export const About = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header Section */}
          <h1 className="text-5xl font-bold mb-6 text-gray-100 text-prim">
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
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 text-prim">
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
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
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
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  Event Highlights
                </h3>
                <ul className="text-gray-400 list-disc list-inside">
                  <li>AI & Machine Learning Workshop</li>
                  <li>Blockchain Innovations Panel</li>
                  <li>Robotics Expo</li>
                  <li>Keynote from Tech CEOs and Pioneers</li>
                  <li>Startup Pitch Competitions</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  Why Attend?
                </h3>
                <ul className="text-gray-400 list-disc list-inside">
                  <li>Exclusive Insights into Emerging Technologies</li>
                  <li>Networking with Industry Leaders</li>
                  <li>Hands-on Experience with Cutting-edge Products</li>
                  <li>Opportunities to Join Workshops Led by Experts</li>
                  <li>Expand Your Professional Network</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-100 mb-8">
              Meet the Tech Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="John Doe"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  John Doe
                </h3>
                <p className="text-gray-400">CEO & Founder</p>
                <p className="text-gray-400 mt-2">
                  With over 15 years of experience in the tech industry, John
                  leads the team with a passion for innovation and growth.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Jane Smith"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Jane Smith
                </h3>
                <p className="text-gray-400">CTO</p>
                <p className="text-gray-400 mt-2">
                  Jane is the technical mastermind behind TechWorld, driving our
                  technology strategy and leading the development of new
                  solutions.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Mike Brown"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Mike Brown
                </h3>
                <p className="text-gray-400">Lead Developer</p>
                <p className="text-gray-400 mt-2">
                  Mike ensures that all the platforms and products are built to
                  the highest technical standards, ensuring seamless
                  performance.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Have questions or want to collaborate with us? We’re here to help!
              Feel free to reach out.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
