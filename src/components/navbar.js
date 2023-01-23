import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between p-4">
      <h1 className="text-2xl  font-bold">jj labs</h1>
      <ul className="flex">
        <li className="mr-4">
          <a
            href="#"
            className="bg mx-2 rounded-md bg-gradient-to-tr from-gray-500 to-gray-900 px-3 py-1 text-white hover:mx-1.5 hover:px-3.5 hover:py-1.5"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg mx-2 rounded-md bg-gradient-to-tr from-gray-500 to-gray-900 px-3 py-1 text-white hover:mx-1.5 hover:px-3.5 hover:py-1.5"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
