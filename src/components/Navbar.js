import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Signup from "../pages/Signup";

const Navbar = ({ isLoggedIn, setIsLogin }) => {
  return (
    <div className="flex gap-10 text-lg justify-evenly bg-black text-white max-h-fit p-2 items-center">
      <Link to="/">
        <img
          src={logo}
          alt="logo-image"
          width={160}
          height={160}
          loading="lazy"
        />
      </Link>
      <nav>
        <ul className="flex gap-7">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login - signup - logout - dashboard */}
      <div className="flex gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-black bg-yellow-400 p-2 px-3 rounded-lg text-center hover:font-semibold">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-black bg-yellow-400 p-2 px-3 rounded-lg text-center hover:font-semibold">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
