import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "./Input";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
const {loading,logIn}=useLogin()
  const handleLogin = async (data) =>{
   
  await logIn(data)
    
  }
  return (
    <div className="w-full flex flex-col text-white gap-10 justify-center items-center h-full ">
      <p className="font-bold  orbitron text-center text-5xl gradient-text utf">UTF 2k24</p>
      <p className="font-bold text-4xl orbitron">Login</p>
      <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
        <span className="text-red-600 text-sm font-lighttrue">
          {errors && errors?.email?.message ||
            errors?.password?.message}
        </span>
        <div className="space-y-5 cabin">
          <Input
            label="Email"
            placeholder="Enter email"
            className="  w-full text-white  input placeholder:text-black/70 focus:outline-none bg-transparent"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            className="  w-full text-white  input placeholder:text-black/70 focus:outline-none bg-transparent"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be minimum 8 characters",
              },
            })}
          />
          <Link to="/register" className="block  gradient-text">
            Don't have an account?{" "}
            <span className="text-white underline">Register here</span>
          </Link>
          <button
            disabled={loading}
            className="gradient-border px-8 py-2 font-bold bg-black button disabled:bg-[#D3D3D3]"
            type="submit"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
