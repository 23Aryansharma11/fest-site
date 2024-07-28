import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          WELCOME TO COGNIZANCE 2024
        </h1>
        <h2 className="text-6xl md:text-7xl font-bold mb-4 text-yellow-500">EVENTS</h2>
        <p className="text-lg md:text-2xl mb-8">
          Experience a dynamic tech fest with drones, robots, interactive games,
          and cutting-edge innovation on display!
        </p>
        <Link
         to="/register"
          className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
