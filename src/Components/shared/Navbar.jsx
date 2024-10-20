import React from "react";

const Navbar = () => {
  return (
    <div class=" w-full	 flex justify-center items-center pt-[66px]">
      <div className=" w-[800px] px-[20px] py-[12px] justify-between items-center rounded-[12px] border border-[#4C2A8B] bg-black/60 backdrop-blur-[5px]">
        <nav className="">
          <ul className="flex justify-between items-center  text-white font-neue-regrade-bold text-[18px] font-bold leading-normal">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>PRODUCTS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
