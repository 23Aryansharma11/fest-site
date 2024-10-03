import React from "react";
import boys from "../assets/boys.jpg";
import { Link } from "react-router-dom";
const PageNotFOund = () => {
  return (
    <div
      style={{
        background: `url(${boys})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-full"
    >
      <h1 className="text-red-900 md:float-left md:mt-56 md:ml-16 font-extrabold pt-40">
        404<br></br>
        NOT FOUND!
      </h1>
      <div className="md:w-max md:absolute bottom-56 right-5">
        <h6 className="text-yellow-500 text-4xl">
          That's fucking diabolical ! Right.
        </h6>
        <Link className="btn btn-warning float-end mt-4 btn-outline" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFOund;
