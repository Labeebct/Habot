import React, { useMemo } from "react";
import Button from "../shared/Button";
import EastIcon from "@mui/icons-material/East";

const ReadyToDive = () => {
  const cities = useMemo(
    () => [
      ["Abu Dhabi", "Sharjah & Ajman", "Ras Al Khaimah"],
      ["Dubai", "Fujairah", "Umm Al Quwain"],
    ],
    []
  );
  return (
    <div className="w-full px-5 lg:px-10 py-20 h-auto bg-white flex flex-col lg:flex-row items-center justify-around">
      <div className="flex flex-col gap-12 overflow-hidden  flex-1 justify-center text-center ">
        <div className="header flex flex-col lg:flex-row gap-2">
          {/* Heading */}
          <h1 className="text-black text-3xl lg:text-[40px] font-extrabold font-poppins">
            Ready to dive into
            <span className="text-3xl ml-2 lg:text-[40px] font-extrabold font-poppins text-blue-950">
              HABOT?
            </span>
          </h1>
        </div>
        <div className="paragraph">
          {/* Paragraph */}
          <p className="lg:text-[14px]  text-[14px] font-poppins font-[400] text-center lg:text-start">
            Signing up with HABOT opens the door to a world of new opportunities
            <span className="hidden xl:inline">
              <br />
            </span>
            and potential for business growth. Gain access to a vibrant
            community
            <span className="hidden xl:inline">
              <br />
            </span>
            of like-minded individuals, unlock valuable resources, and take the
            first
            <span className="hidden xl:inline">
              <br />
            </span>
            step towards realizing your entrepreneurial dreams.
          </p>
        </div>
        <div className="button flex justify-center lg:justify-start">
          {/* Button */}
          <button className="flex justify-around h-[55px] lg:h-[65px] rounded bg-[#00732F] w-[270px] lg:w-[320px]  text-white  items-center hover:bg-[#14562f]">
            <h1 className="text-[18px] font-poppins font-semibold">
              Sign up Today !
            </h1>
            <EastIcon sx={{ fontSize: 33 }} />
          </button>
        </div>
      </div>

      <div className="flex-1 w-full px-5 h-full flex justify-center flex-col lg:flex-row gap-6 mt-8 lg:mt-0">
        {cities.map((column, index) => (
          <div key={index} className="flex w-full h-full flex-col gap-6">
            {column.map((city, index) => (
              <Button key={index} text={city} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyToDive;
