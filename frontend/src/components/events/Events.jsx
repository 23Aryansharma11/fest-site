import React from "react";
import EventCarousel from "./EventCarousel.jsx";

const Events = () => {
  return (
    <div className="space-y-4">
      <h1 className="md:text-6xl text-prim text-left ml-5">Events</h1>
      <div className="px-5 relative">
      <EventCarousel />
      </div>
    </div>
  );
};

export default Events;
