import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./CarouselCard";
import { eventData } from "./constant";
const EventCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable
      draggable
      responsive={responsive}
      infinite
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      renderButtonGroupOutside
      className=""
    >
      {eventData.map((event, key) => (
        <CarouselCard
          key={key}
          name={event.name}
          shortDescription={event.shortDescription}
          slug={event.slug}
          imageUrl={event.imageUrl}
        />
      ))}
    </Carousel>
  );
};

export default EventCarousel;
