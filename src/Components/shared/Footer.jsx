import React from "react";
import fb from "../../assets/img/social-media.png";
import twitter from "../../assets/img/social-media (1).png";
import linkdin from "../../assets/img/linkedin.png";

const Footer = () => {
  return (
    <div className="text-white pb-[54px]">
      <footer className="flex justify-between px-[250px]">
        <div className="flex list-none justify-between	w-[330px]">
          <li>Deslop</li>
          <li>Privacy Notice</li>
          <li>Cokie Policy</li>
        </div>
        <div className=" bg-white ">
          <ul className=" flex justify-between w-[204px]">
            <li className="w-[27px]">
              <img src={fb} alt="" />
            </li>
            <li className="w-[27px]">
              <img src={twitter} alt="" />
            </li>
            <li className="w-[27px]">
              <img src={linkdin} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
