import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/authcontext";
import toast from "react-hot-toast";
import img from "../../assets/atlantus.png";
import { motion, useAnimation } from "framer-motion";
import "./nvabar.css";
const Nav = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    // { label: "Sponsors", href: "/sponsors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Collaborate", href: "/collaborate" },
  ];

  const handleLogout = async () => {
    localStorage.removeItem("user");
    await setAuthUser(null);
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success(`Logged out successfully`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleMobileMenu = async () => {
    setIsMobileMenuOpen((prev) => !prev);
    isMobileMenuOpen
      ? controls.start({ height: 0 })
      : controls.start({ height: "auto" });
  };

  return (
    <nav className="bg-darkbg/95 md:bg-darkbg/50 md:backdrop-blur-lg text-white  top-0 z-20 mx-auto w-full flex items-center justify-between p-2 flex-wrap xs:px-0 md:px-5 fixed">
      <Link to="/home">
        <div className="flex gap-2 items-center justify-between font-bold text-2xl orbitron hover:text-prim transition-colors duration-300">
          <img className="size-8" src={img} alt="logo" />
          <span
            style={{ fontStyle: "'Marine Corps', sans-serif" }}
            className="logo gradient-text"
          >
            UTF 2024
          </span>
        </div>
      </Link>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoCloseOutline size={24} />
          ) : (
            <IoMenuOutline size={24} />
          )}
        </button>
      </div>
      <motion.div
        className={`absolute top-full left-0 w-full text-white z-30 p-2 md:flex md:static md:w-2/3 md:items-center md:justify-between transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "bg-darkbg/95" : "hidden"
        }`}
        animate={controls}
        initial={{ height: 0 }}
      >
        <div className="md:flex transition-color ease-in-out hover:gradient-text duration-300">
          {navItems.map((item, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -30 }} // Start above the normal position
              animate={{ opacity: 1, y: 0 }} // Fall to original position
              transition={{
                duration: 0.5,
                delay: key * 0.1, // Stagger effect
              }}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `py-2 md:px-4 md:py-0 block hover:gradient-text font-bold ${
                    isActive
                      ? "gradient-text"
                      : "hover:gradient-text  duration-300"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}

          {authUser && (
            <motion.div
              initial={{ opacity: 0, y: -30 }} // Start above the normal position
              animate={{ opacity: 1, y: 0 }} // Fall to original position
              transition={{
                duration: 0.5,
                delay: navItems.length * 0.1, // Delay for the next item
              }}
            >
              <NavLink
                to="/getme"
                className={({ isActive }) =>
                  `py-2 md:px-4 md:py-0 block font-bold ${
                    isActive
                      ? "gradient-text"
                      : "hover:gradient-text transition-colors duration-300"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Applied
              </NavLink>
            </motion.div>
          )}
          {authUser?.isAdmin && (
            <motion.div
              initial={{ opacity: 0, y: -30 }} // Start above the normal position
              animate={{ opacity: 1, y: 0 }} // Fall to original position
              transition={{
                duration: 0.5,
                delay: (navItems.length + 1) * 0.1, // Delay for the next item
              }}
            >
              <NavLink
                to="/getall"
                className={({ isActive }) =>
                  `py-2 md:px-4 md:py-0 block font-bold ${
                    isActive
                      ? "gradient-text"
                      : "hover:gradient-text transition-colors duration-300"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                All Submissions
              </NavLink>
            </motion.div>
          )}
        </div>
        <div className="md:flex md:items-center gap-3">
          {authUser ? (
            <Link
              to="/home"
              className="block font-bold  hover:bg transition-colors duration-300 py-2 px-4 md:hidden"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="block font-bold hover:bg gradient-border transition-colors duration-300 py-2 px-4 md:hidden"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block font-bold bg duration-300 py-2 px-4 md:hidden"
                onClick={toggleMobileMenu}
              >
                Register
              </Link>
            </>
          )}
          {/* For larger screens */}
          {authUser ? (
            <button className="hidden md:block">
              <Link
                to="/home"
                className="block text-white font-bold"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </button>
          ) : (
            <>
              <button className="hidden md:block  gradient-border">
                <Link
                  to="/login"
                  className="block text-white font-bold relative z-10"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              </button>
              <button className="  hidden md:block   button gradient-border    duration-1000">
                <Link
                  to="/register"
                  className="block text-white relative z-10 font-bold "
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
              </button>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
