import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className=" ">
        <h1 className=" bg-gradient-to-r from-[#595A7B] via-[#FFF] to-[#595A7B] bg-clip-text text-transparent text-center font-neue-regrade-bold text-[350px] font-bold leading-none">
          DESIGN
        </h1>

        <h3 className="text-[#E6E6E6] text-center font-neue-regrade-bold text-[64px] font-bold leading-normal tracking-[-1.28px]">
          THAT ENHANCE AND ENRICH USER LIVES
        </h3>
        <p className="text-white/60 text-center font-neue-regrade text-[18px] font-medium leading-[124%] tracking-[0.54px]">
          {/* self-stretch text-white/60 text-center font-neue font-medium text-[18px] leading-[1.24] tracking-[0.54px] */}
          AND GETS THE BUSINESS TARGET
        </p>
        <div className="flex justify-center items-center pt-[24px] ">
          <button className="flex p-[10px_20px] justify-center items-center self-stretch bg-[#00011F] text-white text-center font-neue-regrade-regular text-[16px] leading-normal rounded-[12px] border-2 border-[#4C2A8B]">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
