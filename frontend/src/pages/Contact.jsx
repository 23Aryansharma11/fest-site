import { useRef, useState } from "react";
import contactImage from "../assets/TECHNICAL TEAM LOGO.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import Footer from "../components/Footer/Footer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(form.current);
    // setEmail("");
    // setMessage("");
    // setName("");


    emailjs
    .sendForm('service_jnllih9', 'template_2tjrgqs', form.current, {
      publicKey: '0gbVNLIjke5tfIr9H',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("Message sent ")
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error(`${error.text}`)
      },
    );
    e.target.reset();
  };

  const navigate = useNavigate();

  return (
    <>
    <Nav/>
      <div className="flex justify-center items-center w-full h-[100vh] bg-inherit xs:p-0 md:px-5 py-5 overflow-hidden">
        <div className="xl:max-w-7xl bg-inherit drop-shadow-xl border-3 border-yellow-500 border-black/20 w-full rounded-md flex justify-between items-stretch xs:px-2 md:px-5 xl:px-5 py-5">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-3 top-10 btn btn-warning"
          >
            <IoIosArrowBack />
          </button>
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex">
            <img
              src={contactImage}
              alt="contact"
              className="h-[500px] bg-inherit"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-yellow-500">
              Contact Us
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <form onSubmit={handleClick} ref={form}>
                <div className="flex  flex-col gap-3">
                
                  <input
                    type="text"
                    value={name}
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="input input-bordered input-warning border-3   w-full text-black placeholder:text-black/70"
                  />
               
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input input-bordered input-warning border-3   w-full text-black placeholder:text-black/70"
                />
                <textarea
                  placeholder="Enter Your Message"
                  value={message}
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="input input-bordered input-warning p-3 border-3 w-full text-black placeholder:text-black h-32"
                />
                 </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center pt-3">
                  <button
                    className="btn btn-outline btn-warning  max-w-[200px]"
                 
                  >
                    Submit
                  </button>
                  
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
