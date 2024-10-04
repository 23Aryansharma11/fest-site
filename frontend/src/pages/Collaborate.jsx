import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/navbar/Nav";
import Footer from "../components/Footer/Footer";

const PaymentPage = () => {
  const [showQR, setShowQR] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleAnonymousPaymentClick = () => {
    setShowPaymentForm(false);
    setShowQR(true);
  };

  const handlePaymentClick = () => {
    setShowPaymentForm(true);
    setShowQR(false);
  };

  const handleShowQR = () => {
    setShowQR(true);
  };

  const handleCloseQR = () => {
    setShowQR(false);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 flex flex-col items-center justify-center mt-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ fontFamily: "marine corps" }}
        >
          Choose Your Payment Method
        </motion.h1>

        {/* Button Container */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Anonymous Payment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent gradient-border py-3 px-8 rounded-lg shadow-lg  transition duration-300 ease-in-out transform hover:shadow-2xl"
            onClick={handleAnonymousPaymentClick}
          >
            Anonymous Payment
          </motion.button>

          {/* Regular Payment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" bg-transparent gradient-border py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl"
            onClick={handlePaymentClick}
          >
            Regular Payment
          </motion.button>
        </motion.div>

        {/* Conditionally Render Payment Form */}
        <AnimatePresence mode="wait">
          {showPaymentForm && (
            <motion.div
              key="payment-form"
              className="mt-12"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-2xl font-semibold mb-1 text-center">
                Payment Form
              </h2>
              <motion.form
                className="bg-gray-800 p-10 rounded-lg flex flex-col gap-6 shadow-lg max-w-lg mx-auto" // Increased width
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.input
                  type="text"
                  placeholder="Name"
                  className="p-3  bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  variants={fadeInUp}
                />
                <motion.input
                  type="text"
                  placeholder="Contact Number"
                  className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  variants={fadeInUp}
                />
                <motion.input
                  type="email"
                  placeholder="Email ID"
                  className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  variants={fadeInUp}
                />
                <motion.input
                  type="text"
                  placeholder="Transaction ID"
                  className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  variants={fadeInUp}
                />
                <motion.button
                  type="button"
                  className="bg-transparent gradient-border py-2 rounded-md  transition duration-300 ease-in-out transform hover:shadow-xl"
                  onClick={handleShowQR} // Button to show QR Code Modal
                >
                  Show QR Code
                </motion.button>
                <motion.button
                  type="submit"
                  className="bg-transparent gradient-border py-3 rounded-md  transition duration-300 ease-in-out transform hover:shadow-xl"
                  variants={fadeInUp}
                >
                  Submit
                </motion.button>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QR Code Modal */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={handleCloseQR} // Close modal on overlay click
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent click event from closing the modal
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Scan the QR Code
                </h2>
                <motion.div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src="https://via.placeholder.com/200"
                    alt="QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </motion.div>
                <motion.button
                  onClick={handleCloseQR}
                  className="mt-4 bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
