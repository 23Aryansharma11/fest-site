import { useState } from "react";
import contactImage from "../assets/TECHNICAL TEAM LOGO.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    console.log({
      name: name,
      email: email,
      message: message,
    });
    setEmail("");
    setMessage("");
    setName("");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-white px-5 py-5 overflow-hidden">
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-10 top-10 bg-white"
          >
            <IoIosArrowBack />
          </button>
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex">
            <img
              src={contactImage}
              alt="contact"
              className="h-[500px] bg-white"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
              Contact Us
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                <textarea
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="input input-bordered input-primary w-full text-black placeholder:text-black h-32"
                />
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <button
                    className="btn btn-active btn-primary btn-block max-w-[200px]"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
