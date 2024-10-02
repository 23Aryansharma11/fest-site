import React from "react";
export const Tempcard = () => {
  return (
    <div className="h-80 w-60 relative outer overflow-hidden rounded-xl">
      <img className="h-full w-full object-cover " src={pubg} />
      <div
        style={{ transition: "1s ease-in-out" }}
        className="absolute w-full h-full top-0 p-2   inner translate-y-96 peer-hover:translate-y-0"
      ></div>
      <div className="bg-transparent opacity-100 text w-full h-full">
        <h1>PUBG</h1>
        <button className="btn btn-warning">Submit</button>
      </div>
    </div>
  );
};
