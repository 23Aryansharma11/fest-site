import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center text-white">
      <div className="bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-light mb-4">
          WELCOME TO <span className=" text-prim">UTKARSH</span> 2024
        </h1>
        <h2 className="text-6xl md:text-7xl font-bold mb-4 text-prim">
          GALLERY
        </h2>
        <p className="text-lg md:text-2xl mb-8 w-full md:w-[40%] text-center ">
          Explore our vibrant fest gallery showcasing the excitement of cultural
          activities, thrilling games, and intense coding contests! Experience
          the energy and creativity captured in every moment.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
