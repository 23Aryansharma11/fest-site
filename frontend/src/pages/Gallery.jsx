import React from "react";
import WelcomeScreen from "../components/Gallery/WelcomeScreen";
import Nav from "../components/navbar/Nav";
import GallerySection from "../components/Gallery/GallerySection";

const Gallery = () => {
  return (
    <main className="min-h-screen w-full text-white">
      <Nav />
      {/* Welcome */}
      <WelcomeScreen />
      {/* Gallery */}
      <GallerySection />
    </main>
  );
};

export default Gallery;
