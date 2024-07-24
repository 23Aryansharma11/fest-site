import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="m-10">
      
      <div className="flex flex-col md:flex-row items-center">

        <div className="w-[100%] md:w-1/2 ">
        
          <h2 className="flex justify-start text-white  pb-4 ">Cognizance 20<span className="text-[#FFbd00]">24</span> </h2>
          <p>
            Cognizance, the annual technical fest of IIT Roorkee, run by
            students, is an enthralling kaleidoscope of internally invigorating
            events. It has something in store for all and brings together
            renowned experts of various spheres of academic and the corporate
            industry
          </p>
        </div>
        <div className="flex  mt-10 md:mt-0  md:justify-center w-full md:w-1/2 ">
            <a href="/" className=" text-white">About Us</a>
            <a href="/" className="pl-10 text-white">Events</a>
            <a href="/" className="pl-10 text-white">Meet Tech Team</a>
            <a href="/" className="pl-10 text-white">Meet Developers</a>
        </div>
      </div>
      <hr className="border-white border-5 my-2"  />
      <div>
      <p className="text-bold">Connect with us</p>
        <div className="flex mb-3">
        
        <a href="" ><FaInstagram  className="text-white"/></a>
        <a href="" className="ml-2"><CgMail className="text-white" /></a>
        </div>
        <p>©Cognizance 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
