import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <hr className="my-8 border-gray-700" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper part of the footer */}
        <div className="md:flex md:justify-between md:items-center">
          {/* Left side - Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl text-left font-bold text-yellow-400">
              UTF 2024
            </h2>
            <p className="text-gray-300 mt-2 max-w-md">
              Cognizance, the annual technical fest of IIT Roorkee, run by
              students, is an enthralling kaleidoscope of internally
              invigorating events. It has something in store for all and brings
              together renowned experts of various spheres of academic and the
              corporate industry.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-medium text-white">About us</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    SPP
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">Policies</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    T&C
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">More Info</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Cancel & Refund
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">Workshops</h3>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />
        {/* Lower part of the footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Social media links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="text-gray-300">Connect with us on:</span>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Copyright text */}
          <p className="text-gray-400 text-center md:text-right">
            © UTF 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
