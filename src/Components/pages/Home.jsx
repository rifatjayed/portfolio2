import React from "react";
import Hero from "../shared/Hero";
import Navbar from "../shared/navbar";

import videoOne from "../../assets/img/about.mp4";
import hero1 from "../../assets/img/hero1-removebg-preview.png";
import hero2 from "../../assets/img/hero2.mp4";
import Footer from "../shared/Footer";
import ProPic from "../../assets/img/bappi.png";

const Home = () => {
  return (
    <div className="bg-black">
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>

      <div className="relative">
        <div className="px-[100px]">
          <video className="w-[1502px]  flex-shrink-0 " autoPlay muted loop>
            {/* w-[1500px] h-auto */}
            <source src={videoOne} type="video/mp4" />
          </video>
          <h1 className="absolute inset-0 flex flex-col justify-center items-center text-center font-raleway font-bold	 text-[64px]">
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

      {/* About Section */}
      <div className="flex">
        <div
          className="flex w-[650px] p-[30px] flex-col items-start gap-[15px] rounded-[20px] border-2 border-[rgba(94,32,208,0.10)] bg-[rgba(1,2,68,0.10)]"
          style={{ backdropFilter: "blur(50px)" }}
        >
          <h2 className="text-white font-raleway text-[48px] font-medium leading-normal">
            Hi there, I’m Bappy
          </h2>
          <p className="text-white/80 font-raleway text-[24px] font-medium leading-normal">
            A User Interface And User Experiences Designer, based on Asia. I’m a
            google certified UX designer. I help clients transform their brands,
            grow their business, through effective solutions and designs.
          </p>
        </div>
        <div>
          <img
            className="w-[635px] h-[567.892px] flex-shrink-0"
            style={{ transform: "rotate(13.276deg)" }}
            src={ProPic}
            alt=""
            srcset=""
          />
        </div>
      </div>
      {/* About Section */}

      {/* service section */}

      {/* <div className="flex items-center   mt-[60px]">
        <div>
          <img src={hero1} alt="" srcset="" />
        </div>
        <div className="ms-[285px] w-[859px] h-[358px]">
          <h1 className=" bg-gradient-to-r from-[#595A7B] via-[#FFF] to-[#595A7B] bg-clip-text text-transparent  text-[40px] font-bold leading-normal  flex-shrink-0">
            I GIVE MY SERVICE FIRST, AND PAY ONLY WHEN YOU’RE COMPLETELY
            SATISFIED WITH THE RESULTS.
          </h1>
          <p className="text-white/60 font-neue text-[18px] font-bold leading-normal ">
            Ensuring your satisfaction is my mission. I listen closely, respond
            promptly, and aim to exceed your expectations with every interaction
          </p>
        </div>
      </div> */}

      {/* <div className="w-[1920px] h-[1080px] relative bg-black">
        <div className="w-[888px] h-[652px] left-[-131px] top-[294px] absolute bg-[#5e20d0]/60 rounded-full blur-[1000px]" />
        <img
          className="w-[529px] h-[899.16px] left-0 top-[47px] absolute"
          src={hero1}
        />
        <div className="left-[814px] top-[435px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="w-[822px] text-white text-[40px] font-bold font-['Neue Regrade']">
            I GIVE MY SERVICE FIRST, AND PAY ONLY WHEN YOU’RE COMPLETELY
            SATISFIED WITH THE RESULTS.
          </div>
          <div className="w-[859px] text-white/60 text-lg font-bold font-['Neue Regrade']">
            Ensuring your satisfaction is my mission. I listen closely, respond
            promptly, and aim to exceed your expectations with every interaction
          </div>
        </div>
        <div className="w-[561px] h-[358px] left-[1968.65px] top-[344.20px] absolute origin-top-left rotate-[139.02deg] mix-blend-screen" />
        <div className="w-[241px] h-[122px] left-[1118px] top-[788px] absolute mix-blend-screen" />
      </div> */}
      <div className="w-full h-[1080px] relative bg-black overflow-x-hidden flex items-center ">
        <div className="w-[888px] h-[652px] left-[-131px] top-[294px] absolute bg-[#5e20d0]/60 rounded-full blur-[1000px]" />
        <img
          className=" left-0 top-[47px] absolute"
          src={hero1}
          alt="Hero Image"
        />
        <div className="left-[514px] top-[435px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="">
            <div className="w-[822px] h-[150px] text-white text-[40px]  font-neue-regrade-bold">
              I GIVE MY SERVICE FIRST, AND PAY ONLY WHEN YOU’RE COMPLETELY
              SATISFIED WITH THE RESULTS.
            </div>
            <div className="w-[859px] text-white/60 text-lg  font-neue-regrade-bold mt-[30px]">
              Ensuring your satisfaction is my mission. I listen closely,
              respond promptly, and aim to exceed your expectations with every
              interaction.
            </div>
          </div>
        </div>
        {/* <div className="w-[561px] h-[358px] left-[1968.65px] top-[344.20px] absolute origin-top-left rotate-[139.02deg] mix-blend-screen" /> */}
        <div className="w-[241px] h-[122px] left-[1118px] top-[788px] absolute mix-blend-screen">
          <video className=" " autoPlay muted loop>
            <source src={hero2} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* service section */}
      <div>
        <h1 className="bg-gradient-to-r from-[#595A7B] via-[#FFFFFF] to-[#595A7B] bg-clip-text text-transparent font-bold text-5xl	text-center my-[50px]">
          LET’S WORK TOGATHER
        </h1>
        {/* <video className="w-[500px] h-auto " autoPlay muted loop>
          <source src={videotwo} type="video/mp4" />
        </video> */}
      </div>
      <Footer></Footer>
    </div>
    // <div>
    //   <Full></Full>
    // </div>
  );
};

export default Home;
