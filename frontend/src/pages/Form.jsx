import React, { useState } from "react";
import useRegistration from "../hooks/useRegistration.js";
import Nav from "../components/navbar/Nav";
import { useAuthContext } from "../context/authcontext";
import { useParams } from "react-router-dom";
import QR from "./qrcode.jpg";

export const Form = () => {
  const [qr, setQr] = useState(false);
  const { registration, loading } = useRegistration();
  const { name } = useParams();
  const { authUser } = useAuthContext();
  const [values, setValues] = useState({
    email: authUser.email,
    player2Name: "",
    player3Name: "",
    player4Name: "",
    eventName: name,
  });

  const handleModal = () => {
    setQr(!qr);
  };

  const handleChange = (e) => {
    // if(e.target.name === "contact"){
    //   const number = e.target.value;
    //   const alphabets = ['a', 'A', 'b', 'B']
    //   number.split("").includes()
    // }

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registration(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12">
        <div className="w-full max-w-2xl p-8 bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-3xl gradient-text font-bold text-center mb-6 ">
            Event Registration Form
          </h1>
          <form onSubmit={handleSubmit}>
            {qr && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity text-left duration-300">
                <div className="relative bg-black gradient-border p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <img
                    className="mx-auto h-64 object-cover rounded-md"
                    src={QR}
                    alt="QR Code"
                  />
                  <p className="gradient-text mt-4 text-sm text-center">
                    <strong className="text-error">Note:</strong> Please make the payment of the amount specified on the event page and enter the transaction ID below. Your application will be processed only after the payment has been successfully verified.Those who are applying for Dexteria,LAFZ are exempted from fees.They can add null to transaction id.
                  </p>
                  <button
                    onClick={handleModal}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-left text-gray-300 mb-2">
                Event Name *
              </label>
              <input
                type="text"
                name="eventName"
                value={name}
                disabled
                className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={authUser.email}
                disabled
                className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 text-left ">
                Contact No. *
              </label>
              <input
                type="number"
                name="contact"
                onChange={handleChange}
                required
                placeholder="Enter Contact No."
                className="bg-black gradient-text appearance-none focus focus:outline-none input py-3 px-4 w-full"
                style={{
          '-moz-appearance': 'none', // Hides arrows in Firefox
          '-webkit-appearance': 'none', // Hides arrows in WebKit browsers (Chrome, Safari)
          'appearance': 'none' // Standard CSS property to remove appearance
        }}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                  Player 1 Name *
                </label>
                <input
                  type="text"
                  name="player1Name"
                  onChange={handleChange}
                  required
                  placeholder="Enter player 1 name"
                  className="bg-black gradient-text focus:outline-none input w-full py-3 px-4 "
                />
              </div>

              <div className="mb-6 ">
                <label className="block text-sm  text-left font-medium text-gray-300 mb-2">
                  Player 2 Name (if applicable)
                </label>
                <input
                  type="text"
                  name="player2Name"
                  onChange={handleChange}
                  placeholder="Enter player 2 name"
                  className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full "
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-left text-gray-300 mb-2">
                  Player 3 Name (if applicable)
                </label>
                <input
                  type="text"
                  name="player3Name"
                  onChange={handleChange}
                  placeholder="Enter player 3 name"
                  className="bg-black gradient-text focus:outline-none w-full input py-3 px-4 "
                />
              </div>

              <div className="mb-6">
                <label className="block text-left text-sm font-medium text-gray-300 mb-2">
                  Player 4 Name (if applicable)
                </label>
                <input
                  type="text"
                  name="player4Name"
                  onChange={handleChange}
                  placeholder="Enter player 4 name"
                  className="bg-black gradient-text focus:outline-none w-full input py-3 px-4 "
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-left text-gray-300 mb-2">
                Year *
              </label>
              <input
                type="text"
                name="year"
                onChange={handleChange}
                required
                placeholder="Enter Year"
                className="bg-black gradient-text input w-full focus:outline-none py-3 px-4 "
              />
            </div>

            <div className="mb-6">
              <label className="block text-left text-sm font-medium text-gray-300 mb-2">
                Branch *
              </label>
              <input
                type="text"
                name="branch"
                onChange={handleChange}
                required
                placeholder="Enter Branch"
                className="bg-black w-full input focus:outline-none py-3 px-4 "
              />
            </div>

            <div className="mb-6">
              <a
                onClick={handleModal}
                className="gradient-text w-full cursor-pointer hover:underline transition duration-150 ease-in-out"
              >
                Generate QR Code
              </a>
            </div>

            <div className="mb-6">
              <label className="text-left block text-sm font-medium text-gray-300 mb-2">
                Transaction ID *
              </label>
              <input
                type="text"
                name="transaction"
                onChange={handleChange}
                required
                placeholder="Enter Transaction ID"
                className="bg-black input focus:outline-none py-3 px-4 w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 gradient-text gradient-border  text-white rounded-lg shadow-lg hover:gradient-text transition-all duration-150 ease-in-out focus:ring-4 focus:gradient-text"
            >
              {loading ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
