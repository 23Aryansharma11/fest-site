import React from "react";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import SocialIconAnimation from "../Animation/SocialIconAnimation";
export const DevHelper = ({ value }) => {
  console.log(value);
  return (
    <div
      style={{ borderRadius: "10px", Width: "16rem" }}
      className="text-center xs:w-screen sm:w-auto  border-2 p-4 mb-3  border-yellow-500 "
    >
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid yellow",
          margin: "0 auto",
          height: "100px",
          width: "100px",
        }}
      >
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={value.image}
        ></img>
      </div>
      <h2 className="my-3 text-2xl text-yellow-500">{value.name}</h2>
      <p className="my-3 text-center ">
        <em>{value.description}</em>
      </p>
      <h4 className="my-3 text-center text-yellow-500">
        <b>{value.work}</b>
      </h4>
      <div className="mt-6 d-flex gap-3 justify-center text-white  cursor-pointer ">
        {[
          {
            href: value.mail,
            icon: HiMail,
          },
          {
            href: value.linkedin,
            icon: FaLinkedin,
          },
        ].map(({ href, icon: Icon }, idx) => (
          <div
            key={idx}
            className="w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110"
          >
            <a href={href} rel="noopener noreferrer">
              <SocialIconAnimation Icon={Icon} size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
