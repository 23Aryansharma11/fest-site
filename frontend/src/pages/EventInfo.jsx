import { Link } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import "./EventTabs.css"
import { useState } from "react";
import Starfield from 'react-starfield';
const EventInfo = () => {
  const location = useLocation(); // Get the location object
  const { state } = location; // Extract state from location object
  const [active,setActive]=useState("first")

  // Check if state is available and contains the expected properties
  if (!state) {
    return <p>No data available</p>;
  }
  
  return (
    <section className="text-white">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Other components */}
    
      <Nav />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xs:mt-[3rem] md:mt-[2rem]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={state.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <span className="flex flex-col ">
              <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-between">
                <span>{state.title}</span>{" "}
                {state.prize && <span>₹{state.prize}</span>}
              </h2>
              <p className="flex items-center  gap-2 text-gray mt-2">
                <FaLocationDot />
                Uit, Summer Hill
              </p>
            </span>
            <div role="tablist" className="tabs tabs-lifted mt-4">
  <input
    style={{width: "8rem"}}
    type="radio"
    onClick={() => setActive("first")}
    name="my_tabs_2"
    role="tab"
    className={`${active === "first" && "bg"} tab md:w-[10rem] xs:w-[3rem] text-white`}
    aria-label="Description"
    checked={active === "first"}
  />
  <div role="tabpanel" className={`${active === "first" ? "visible" : "hidden"} tab-content bg-black rounded-box`}>
    <p className="mt-4 text-gray-600 text-justify">{state.description}</p>
  </div>

  <input
    onClick={() => setActive("second")}
    style={{width: "8rem"}}
    type="radio"
    name="my_tabs_2"
    role="tab"
    className={`tab md:w-[10rem] xs:w-[3rem] ${active === "second" && "bg"} text-white`}
    aria-label="Rules"
    checked={active === "second"}
  />
  <div role="tabpanel" className={`${active === "second" ? "visible" : "hidden"} tab-content bg-black text-justify rounded-box p-6`}>
    {state.rules ? state.rules : "Haven't Made Rules yet"}
  </div>
</div>


            

            <Link
              // to={`/form/${state.title}`}
              to="/comingsoon"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition gradient-border bg-black hover:bg focus:outline-none focus:ring focus:ring-yellow-400 float-left"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
