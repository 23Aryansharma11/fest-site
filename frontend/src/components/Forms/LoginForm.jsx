import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "./Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) =>{
    setLoading(true)
    try {
      /*
      data = {
        email: "someone@example.com",
        password: "------"
      } 
      */ 
      //send data to backend
      //dispatch data
      setLoading(false)
      //show toast
      //navigate user
    } catch (error) {
      console.log(error)
      setLoading(false)
      //show toast
      //navigate user
    }
  }

  return (
    <div className="w-full flex flex-col text-white gap-10 justify-center items-center h-full ">
      <p className="font-bold text-6xl">Utkarsh 2k24</p>
      <p className="font-bold text-4xl ">Login</p>
      <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
        <span className="text-red-600 text-sm font-lighttrue">
          {errors && errors?.email?.message ||
            errors?.password?.message}
        </span>
        <div className="space-y-5">
          <Input
            label="Email"
            placeholder="Enter email"
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
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be minimum 8 characters",
              },
            })}
          />
          <Link to="/register" className="block text-white">
            Don't have an account?{" "}
            <span className="text-prim underline">Register here</span>
          </Link>
          <button
            disabled={loading}
            className="bg-prim px-8 py-2 font-bold text-black disabled:bg-[#D3D3D3]"
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
