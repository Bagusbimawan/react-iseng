import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-500 sm:bg-green-700 md:w-full w-full">
      <div className="">
        <nav className="flex items-center">
          <h1 className="text-2xl sm:text-3xl m-2 cursor-pointer">Logo</h1>
          <ul className="flex gap-14 mx-auto flex-col sm:flex-row ">
            <li className="text-2xl mt-2 sm:mt-2 text-white font-serif cursor-pointer hover:text-gray-800">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl mt-0 sm:mt-2 text-white font-serif cursor-pointer hover:text-gray-800">
              <Link to="/about">About</Link>
            </li>
            <li className="text-2xl mt-0 sm:mt-2  text-white font-serif cursor-pointer hover:text-gray-800">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
