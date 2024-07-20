import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#14110f] opacity-95 text-white sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-2 flex-wrap">
  <div className="flex items-center justify-between font-bold text-2xl">
    <img className="size-15 pr-3" src="https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/utkarsh_logo" alt="logo"/>
    Utkarsh 2024
  </div>
  <div className="md:hidden flex items-center">
    <button className="bg-transparent hover:border-none focus:border-none transition-none" onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
    </button>
  </div>
  <div className={`absolute top-16  ${isMobileMenuOpen ? "block" : "hidden"} z-20 w-full left-0 pl-3  bg-[#14110f] opacity-95 md:flex md:static md:w-2/3 md:items-center md:justify-between`}>
    <div className="md:flex">
      {navItems.map((item, key) => (
        <NavLink key={key} to={item.href} className={({ isActive }) => `${isActive ? 'text-[#646cff]' : 'text-white'} md:p-4 py-2 block`} onClick={toggleMobileMenu}>
        {item.label}
      </NavLink>
      ))}
    </div>
    <div className="md:flex md:items-center ">
      <Link to="/login" className="md:p-4 py-2 block text-white" onClick={toggleMobileMenu}>Login</Link>
      <Link to="/register" className="md:p-4 py-2 block text-white" onClick={toggleMobileMenu}>Register</Link>
    </div>
  </div>
</nav>

  );
};

export default Nav;