import React from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="fixed w-full md:flex h-20 bg-gray-800 justify-between items-center gap-10 lg:gap-16 hidden"
    >
      <div id="logo">
        <a href="#" className="font-bold text-white pl-10 text-4xl">
          Portfolio
        </a>
      </div>

      <div id="menu-link" className="justify-between text-2xl">
        <a
          href="#hero"
          className="font-bold text-white ml-3 pr-9 transform transition hover:text-gray-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="font-bold text-white ml-3 pr-9 transform transition hover:text-gray-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="font-bold text-white ml-3 pr-9 transform transition hover:text-gray-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="font-bold text-white ml-3 pr-9 transform transition hover:text-gray-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="font-bold text-white ml-3 pr-9 transform transition hover:text-gray-300"
        >
          Contact
        </a>
      </div>

      <IoMdMenu className="md:hidden text-white" size={30} />
    </div>
  );
};

export default Navbar;
