import React from "react";
import { Link } from "react-router-dom";

export const SponsorCard = ({ image, name, description, link }) => {
  return (
    <Link to={link} className="text-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold gradient-text mb-2">{name}</h3>
        <p className="text-gray-600 w-full text-balance">{description}</p>
      </div>
    </Link>
  );
};
