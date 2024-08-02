import React from "react";
import SignUpForm from "../components/Forms/SignUpForm.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Nav from "../components/navbar/Nav.jsx";
const SignUp = () => {
  const navigate = useNavigate();
  const imageUrl =
    "https://res.cloudinary.com/aryansharma/image/upload/v1721474616/UtkarshLogo.png";
  return (
    <>
      <Nav/>
    
    <main className="bg-darkbg text-white min-h-screen w-full flex items-center justify-center relative md:justify-around ">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-3 top-3 border-gray"
      >
        <IoIosArrowBack />
      </button>
      <section className="hidden md:block">
        {/* Todo: Change image */}
        <img src={imageUrl} alt="Logo" className=" size-80" />
      </section>
      <section className="">
        <SignUpForm />
      </section>
    </main>
    </>
  );
};

export default SignUp;
