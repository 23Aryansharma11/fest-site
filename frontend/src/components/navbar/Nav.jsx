import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/authcontext";
import toast from "react-hot-toast";

const Nav = () => {
  const {authUser,setAuthUser}=useAuthContext()
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const handleLogout=async()=>{
  localStorage.removeItem("user")     //doubt of error
 await  setAuthUser(null);
 try {
  const res=await fetch("/api/auth/logout")
  const data=await res.json();
  if(data.error){
    throw new Error(data.error)
  }
  toast.success(`Logged out successfully`)
 } catch (error) {
     toast.error(error)
 }{

 }
}
  const toggleMobileMenu = async() => {
  
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-darkbg/95 md:bg-darkbg/50 md:backdrop-blur-lg text-white sticky top-0 z-20 mx-auto w-full flex items-center justify-between p-2 flex-wrap">
    <Link to="/">  <div className="flex items-center justify-between font-bold text-2xl orbitron hover:text-prim transition-colors duration-300">
        <img className="size-15 pr-3" src="https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/utkarsh_logo" alt="logo"/>
        Utkarsh 2024
      </div></Link>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (<IoCloseOutline size={24} />) : (<IoMenuOutline size={24} />)}
        </button>
      </div>
      <div className={`absolute top-full left-0 w-full ${isMobileMenuOpen ? "block bg-darkbg/95 " : "hidden"} text-white alata-regular z-30 p-2 md:flex md:static md:w-2/3 md:items-center md:justify-between absolute`}>
        <div className="md:flex transition-color ease-in-out duration-300">
          {navItems.map((item, key) => (
            <NavLink key={key} to={item.href} className={({ isActive }) => `py-2 md:px-4 md:py-0 block    ${isActive ? "text-prim": " hover:text-prim transition-colors duration-300"}`} onClick={toggleMobileMenu}>
              {item.label}
            </NavLink>
          ))}
           {authUser &&<NavLink  to="/getme" className={({ isActive }) => `py-2 md:px-4 md:py-0 block    ${isActive ? "text-prim": " hover:text-prim transition-colors duration-300"}`} onClick={toggleMobileMenu}>
              Applied
            </NavLink>}
            {authUser && authUser.isAdmin ?<NavLink  to="/getall" className={({ isActive }) => `py-2 md:px-4 md:py-0 block    ${isActive ? "text-prim": " hover:text-prim transition-colors duration-300"}`} onClick={toggleMobileMenu}>
              All Submissions
            </NavLink>
            :null
            }
        </div>
        <div className="md:flex md:items-center gap-3">
{authUser? <Link to="/" className="block hover:text-prim transition-colors duration-300 py-2 px-4 md:hidden" onClick={handleLogout}>Logout</Link>
:
<><Link to="/login" className="block hover:text-prim transition-colors duration-300 py-2 px-4 md:hidden" onClick={toggleMobileMenu}>Login</Link>
          <Link to="/register" className="block hover:text-prim transition-colors duration-300 py-2 px-4 md:hidden" onClick={toggleMobileMenu}>Register</Link>
</>
}
          {/*for mobile devices*/}
          
          {/*for larger screens */}
        {authUser?<button className="hidden md:block"><Link to="/" className="block text-white" onClick={handleLogout}>Logout</Link></button>:<><button className="hidden md:block"><Link to="/login" className="block text-white" onClick={toggleMobileMenu}>Login</Link></button>
        <button className="hidden md:block md:bg-prim border-none hover:bg-yellow-600 transition-colors duration-300"><Link to="/register" className="block text-white" onClick={toggleMobileMenu}>Register</Link></button>
        </>
        }
        </div>
      </div>
    </nav>

  );
};

export default Nav;