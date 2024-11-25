import React from "react";
import Section from "../home/Section";

const HowItWorks = () => {
  return (
    <div className="main h-auto min-h-[809px] w-full bg-white flex justify-center items-center my-14">
      <div className="w-full px-5 lg:px-8 flex flex-col gap-20">
        <div className="text flex flex-col justify-center items-center gap-6">
          <div className="header text-center">
            <h1 className="font-poppins font-bold text-[28px] md:text-[37px] leading-[36px] md:leading-[48px]">
              How it works?
            </h1>
          </div>
          <div className="paragraph max-h-max text-center w-full px-4">
            <p className="font-poppins font-[400] text-[16px] md:text-[17px] leading-[24px] md:leading-[26px]">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with <br />
              potential buyers, and build successful business relationships,
              sharing valuable feedback.
            </p>
          </div>
        </div>
        <div className="sections w-full px-4 grid justify-center">
          <Section />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
