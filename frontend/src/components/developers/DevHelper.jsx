import React from "react";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import SocialIconAnimation from "../Animation/SocialIconAnimation";

export const DevHelper = ({ value }) => {
  return (
    <div
      style={{ borderRadius: "10px", Width: "16rem" }}
      className="text-center xs:w-screen sm:w-auto border-2 p-4 mb-3 gradient-border rounded-md"
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
        />
      </div>
      <h2 className="my-3 text-2xl gradient-text">{value.name}</h2>
      <p className="my-3 text-center">
        <em>{value.description}</em>
      </p>
      <h4 className="my-3 text-center gradient-text">
        <b>{value.work}</b>
      </h4>
      <div className="mt-6 flex gap-3 justify-center text-white cursor-pointer ">
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
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer" // Ensures the link opens in a new tab safely
            className="w-12 h-12 bg-yellow-600 rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110 z-10"
          >
            <SocialIconAnimation Icon={Icon} size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};
