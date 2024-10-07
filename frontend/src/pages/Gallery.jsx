import React from "react";
import WelcomeScreen from "../components/Gallery/WelcomeScreen";
import Nav from "../components/navbar/Nav";
import GallerySection from "../components/Gallery/GallerySection";
import { Particles } from "../components/Particles/Particles";

const Gallery = () => {
  return (
    <main className="min-h-screen w-full text-white overflow-hidden">
    <div className='overflow-hidden h-[130vh] lg:h-[100vh] absolute'>
    <div className='  w-screen  top-[20rem]'>
        <Particles/>
        </div>
        </div>
      <Nav />
      {/* Welcome */}
      <WelcomeScreen />
      {/* Gallery */}
      <GallerySection />
    </main>
  );
};

export default Gallery;
