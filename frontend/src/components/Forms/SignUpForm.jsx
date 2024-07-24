import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "./Input";
import useSignup from "../../hooks/useSignup.js";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {loading,signup}=useSignup()
  
  const signUp = async (data) => {
    try{
    await signup(data)}
    catch(error){
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col text-white gap-10 justify-center items-center h-full ">
      <p className="font-bold text-5xl orbitron">Utkarsh 2k24</p>
      <p className="font-bold text-4xl orbitron">Sign Up</p>
      <form className="w-full" onSubmit={handleSubmit(signUp)}>
        <span className=" text-red-600 text-sm font-lighttrue ">
          {/* Display errors (Staggered || One after another) */}
          {errors && errors?.name?.message ||
            errors?.email?.message ||
            errors?.password?.message}
        </span>
        <div className="space-y-5 cabin">
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required ",
              minLength: {
                value: 4,
                message: "Name cannot be less than 4 characters",
              },
            })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be minimum 8 characters",
              },
            })}
          />
          <Link to="/login" className="block text-white">
            Already have an account?{" "}
            <span className="text-prim underline">Login</span>
          </Link>
          <button
            disabled={loading} // Button is disabled if the loading is true
            className="bg-prim px-8 py-2 font-bold text-black disabled:bg-[#D3D3D3]"
            type="submit"
          >
            {loading ? "Signing Up..." : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
