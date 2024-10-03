// Footer.js
import React from "react";
import {motion} from "framer-motion"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebookF /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedinIn /> },
  ];

  

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  // const address = , , ,  ';
    const college='University Institute of Technology (HPU)'
    const uni="Silver Wood Estate ";
    const place="Summer Hill, Shimla";
    const state="Himachal Pradesh, 171005, India"
  return (
    
    <footer className="gradient-text-to-r from-gray-900 to-gray-800 text-white py-16">
     <div className="border-t border-gray-700 mt-12 py-8"></div>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="gradient-text text-3xl font-bold mb-4">UTF 2024</h2>
          <p className="text-gray-300">Pioneering Innovation in Technology and Engineering.</p>
          <p className="text-gray-400 mt-4">Empowering the next generation of tech enthusiasts.</p>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="gradient-text text-xl font-bold mb-4">Contact Us</h2>
          <div className="text-center"><p className="text-center">{college}</p> <p className="text-center">{uni}</p> <p className="text-center" >{place}</p> <p className="text-center">{state}</p></div>
          <p className="text-gray-300 mt-4 text-center">Email: info@uittechfest.com</p>
          <p className="text-gray-300 text-center">Phone: +91 8626872550</p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="gradient-text text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href={link.path} className="hover:gradient-text transition-colors duration-300">{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="gradient-text text-xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-300 mb-4">Stay updated with the latest news and announcements from the fest.</p>
          <div className="flex space-x-4 text-2xl items-center justify-center">
            {socialMedia.map((social, index) => (
              <motion.a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:gradient-text transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Additional Links */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="">
          <h2 className="gradient-text text-xl font-bold mb-4">Sponsors</h2>
          <ul className="space-y-2">
            <li><a href="/sponsors" className="hover:gradient-text transition-colors duration-300">Become a Sponsor</a></li>
            <li><a href="/partners" className="hover:gradient-text transition-colors duration-300">Our Partners</a></li>
          </ul>
        </div>
        {/* <div>
          <h2 className="gradient-text text-xl font-bold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:gradient-text transition-colors duration-300">FAQ</a></li>
            <li><a href="/code-of-conduct" className="hover:gradient-text transition-colors duration-300">Code of Conduct</a></li>
          </ul>
        </div> */}
        <div>
          <h2 className="gradient-text text-xl font-bold mb-4">Volunteers</h2>
          <ul className="space-y-2">
            <li><a href="/volunteer" className="hover:gradient-text transition-colors duration-300">Join Us</a></li>
            <li><a href="/volunteer-guidelines" className="hover:gradient-text transition-colors duration-300">Guidelines</a></li>
          </ul>
        </div>
        <div>
          <h2 className="gradient-text text-xl font-bold mb-4">Media</h2>
          <ul className="space-y-2">
            <li><a href="/press" className="hover:gradient-text transition-colors duration-300">Press Kit</a></li>
            <li><a href="/media-inquiries" className="hover:gradient-text transition-colors duration-300">Media Inquiries</a></li>
          </ul>
        </div>
      </motion.div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 pb-0 mb-0">
      <div className="container mx-auto px-4 text-center ">
        <p className="text-gray-400 text-sm">&copy; 2024 UIT Shimla Tech Fest. All rights reserved.</p>
        <p className="text-gray-400 text-sm">
          <a href="/privacy" className="hover:gradient-text transition-colors duration-300">Privacy Policy</a> | 
          <a href="/terms" className="hover:gradient-text transition-colors duration-300 ml-2">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
);

  // (

  //   <footer className="bg-black text-white py-8">
  //     <hr className="my-8 border-gray-700" />
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       {/* Upper part of the footer */}
  //       <div className="md:flex md:justify-between md:items-center">
  //         {/* Left side - Description */}
  //         <div className="mb-8 md:mb-0">
  //           <h2 className="text-2xl text-left font-bold gradient-text">
  //             UTF 2024
  //           </h2>
  //           <p className="text-gray-300 mt-2 max-w-md">
  //             Cognizance, the annual technical fest of IIT Roorkee, run by
  //             students, is an enthralling kaleidoscope of internally
  //             invigorating events. It has something in store for all and brings
  //             together renowned experts of various spheres of academic and the
  //             corporate industry.
  //           </p>
  //         </div>

  //         {/* Right side - Links */}
  //         <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
  //           <div>
  //             <h3 className="font-medium text-white">About us</h3>
  //             <ul className="mt-2 space-y-2">
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   SPP
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   Events
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div>
  //             <h3 className="font-medium text-white">Policies</h3>
  //             <ul className="mt-2 space-y-2">
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   Privacy Policy
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   T&C
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div>
  //             <h3 className="font-medium text-white">More Info</h3>
  //             <ul className="mt-2 space-y-2">
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   Shipping Policy
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="#" className="text-gray-400 hover:text-gray-200">
  //                   Cancel & Refund
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div>
  //             <h3 className="font-medium text-white">Workshops</h3>
  //           </div>
  //         </div>
  //       </div>

  //       <hr className="my-8 border-gray-700" />
  //       {/* Lower part of the footer */}
  //       <div className="flex flex-col md:flex-row md:justify-between md:items-center">
  //         {/* Social media links */}
  //         <div className="flex space-x-4 mb-4 md:mb-0">
  //           <span className="text-gray-300">Connect with us on:</span>
  //           <a href="#" className="text-gray-400 hover:text-gray-200">
  //             <i className="fab fa-instagram"></i>
  //           </a>
  //           <a href="#" className="text-gray-400 hover:text-gray-200">
  //             <i className="fab fa-facebook"></i>
  //           </a>
  //           <a href="#" className="text-gray-400 hover:text-gray-200">
  //             <i className="fab fa-twitter"></i>
  //           </a>
  //           <a href="#" className="text-gray-400 hover:text-gray-200">
  //             <i className="fab fa-linkedin"></i>
  //           </a>
  //         </div>

  //         {/* Copyright text */}
  //         <p className="text-gray-400 text-center md:text-right">
  //           © UTF 2024. All rights reserved.
  //         </p>
  //       </div>
  //     </div>
  //   </footer>
  // );
  
  
 
};


export default Footer;
