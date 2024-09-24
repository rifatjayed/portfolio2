import React from "react";
import Hero from "../shared/Hero";
import Navbar from "../shared/navbar";

import videoOne from "../../assets/img/about.mp4";

const Home = () => {
  return (
    <div className="bg-black">
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>

      <div className="relative">
        <div className="px-[100px]">
          <video className="w-[1500px] h-auto " autoPlay muted loop>
            <source src={videoOne} type="video/mp4" />
          </video>
          <h1 className="absolute inset-0 flex flex-col justify-center items-center text-center font-bold text-[64px]">
            <div>
              <span className="bg-gradient-to-r from-[#595A7B] via-[#FFFFFF] to-[#595A7B] bg-clip-text text-transparent ">
                I SUPPORT
              </span>
              <span className="text-white"> EVERY</span>
            </div>

            {/* <br /> */}
            <div>
              <span className="bg-gradient-to-r from-[#595A7B] via-[#FFFFFF] to-[#595A7B] bg-clip-text text-transparent ">
                CREATIVE
              </span>
              <span className="text-white"> THINKER</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
