import React from "react";
import Hero from "../shared/Hero";
import Navbar from "../shared/navbar";

import videoOne from "../../assets/img/about.mp4";

const Home = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>

      <div>
        <video className="w-[1500px] h-auto " autoPlay muted loop>
          <source src={videoOne} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
