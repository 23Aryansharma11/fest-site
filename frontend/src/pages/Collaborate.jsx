import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/navbar/Nav";
import Footer from "../components/Footer/Footer";
import pay from "../assets/divay pay.jpg"
import  useCollab  from "../hooks/useCollab";
import toast from "react-hot-toast";
const PaymentPage = () => {
  const {collab,loading}=useCollab()
  const [showQR, setShowQR] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
const [data,setData]=useState({name:"",email:"",transaction:"",contact:""})
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
  const handleChange = (e) => {
    // if(e.target.name === "contact"){
    //   const number = e.target.value;
    //   const alphabets = ['a', 'A', 'b', 'B']
    //   number.split("").includes()
    // }

    setData({ ...data, [e.target.name]: e.target.value });
  };

const handleSubmit=async(e)=>{
  
  e.preventDefault();
  try {
    await collab(data);
  } catch (err) {
    toast.error(`${err}`)
    console.log(err);
  }
}

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
            className=" bg-transparent gradient-border py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl "
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
              className="mt-12 w-full sm:w-full sm:px-4" // Full width on small screens
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-2xl font-semibold mb-1 text-center">
                Payment Form
              </h2>
              <motion.form
                className="bg-gray-800 p-10 rounded-lg flex flex-col gap-6 shadow-lg max-w-lg mx-auto sm:w-full" // Full width on small screens
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                onSubmit={handleSubmit}
              >
                <motion.input
                  type="text"
                  onChange={handleChange}
                  placeholder="Name"
                  name="name"
                  className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
                  variants={fadeInUp}
                />
                <motion.input
                  type="text"
                  name="contact"
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
                  variants={fadeInUp}
                />
                <motion.input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
                  variants={fadeInUp}
                />
                <motion.input
                  type="text"
                  name="transaction"
                  onChange={handleChange}
                  placeholder="Transaction ID"
                  className="bg-black gradient-text focus:outline-none input py-3 px-4 w-full"
                  variants={fadeInUp}
                />
                <motion.button
                  type="button"
                  className="bg-transparent gradient-border py-2 rounded-md transition duration-300 ease-in-out transform hover:shadow-xl"
                  onClick={handleShowQR}
                >
                  Show QR Code
                </motion.button>
                <motion.button
                  // type="submit"
                  className="bg-transparent gradient-border py-3 rounded-md transition duration-300 ease-in-out transform hover:shadow-xl"
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
              onClick={handleCloseQR}
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
                    onChange={handleChange} src={pay}
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
