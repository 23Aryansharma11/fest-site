import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 mt-5 footer footer-center bg-black text-base-content r p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover text-white ">About us</Link>
        <Link to="/contact" className="link link-hover text-white ">
          Contact
        </Link>
        <Link className="link link-hover text-white ">Meet Tech Team</Link>
        <Link to="/developers" className="link link-hover text-white ">
          Meet Developers
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.youtube.com/@HPU-UIT" aria-label="Email">
            <FaYoutube className="text-2xl text-current" />
          </a>
          <a href="https://www.instagram.com/uit.tech/" aria-label="Instagram">
            <FaInstagram className="text-2xl text-current" />
          </a>
          <a href="mailto:techteam.uit@gmail.com" aria-label="Email">
            <CgMail className="text-2xl text-current" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Tech
          Team UIT
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
