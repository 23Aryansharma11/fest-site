import React from "react";
import { DevHelper } from "../components/developers/DevHelper";
import Sujal from "../../public/images/sujal2.jpg";
import Divay from "../../public/images/Divay.png";
import Nav from "../components/navbar/Nav";
import { About } from "../pages/AboutPage.jsx";
export const data = [
  {
    name: "Sujal Verdhan",
    description:
      "As web developers, we've all been there with margins. It's like trying to keep everyone in line, but there's always that one element insisting on pushing the boundaries just a little too far!",
    work: "Web Developer",
    insta: "https://www.instagram.com/sujal_vardhan/",
    linkedin: "https://www.linkedin.com/in/sujal-verdhan-21859a225/",
    image: Sujal,
  },
  {
    name: "Divay Sharma",
    description:
      "As web developers, we've all been there with margins. It's like trying to keep everyone in line, but there's always that one element insisting on pushing the boundaries just a little too far!",
    work: "Web Developer",
    insta: "https://www.instagram.com/divay._.sharma/",
    linkedin: "https://www.linkedin.com/in/divaysharma",
    image: Divay,
  },
  {
    name: "Aryan",
    description:
      "As web developers, we've all been there with margins. It's like trying to keep everyone in line, but there's always that one element insisting on pushing the boundaries just a little too far!",
    work: "Web Developer",
    insta: "",
    linkedin: "",
  },
  {
    name: "Ruhani Kapoor",
    description:
      "As web developers, we've all been there with margins. It's like trying to keep everyone in line, but there's always that one element insisting on pushing the boundaries just a little too far!",
    work: "Web Developer",
    insta: "",
    linkedin: "",
  },
];
export const Developers = () => {
  return (
    <>
      <Nav />
      <div>
        <h1 className="p-8 text-yellow-500 text-3xl">Meet Our Developers</h1>
        <div className="md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-4 d-grid gap-3 justify-center">
          {data.map((e, index) => (
            <DevHelper key={index} value={e} />
          ))}
        </div>
      </div>
    </>
  );
};
