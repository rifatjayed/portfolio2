import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center pt-[30px] mb-[50px]">
      <nav className="border-2	border-[#4C2A8B]">
        <ul className="flex justify-between items-center w-[800px] text-[#AAAAAA] px-[20px]">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
