import React from "react";
import SearchBar from "../shared/SearchBar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PlaceIcon from "@mui/icons-material/Place";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/assets/Bgimage.png)' }}
      className="w-full bg-cover bg-fixed  h-[calc(100vh-5rem)] relative flex flex-col items-center justify-center"
    >
      <div className="md:mb-16 w-full px-10 h-auto flex flex-col gap-3 items-center">
        <div className="flex flex-col gap-5 items-center justify-around">
          <h1 className="lg:text-[55px] md:text-[45px] text-[35px] font-extrabold text-white font-Poppins">
            Are You a Supplier?
          </h1>
          <h1 className="lg:text-[50px] md:text-[42px] md:font-[400] text-center text-[25px] sm:text-[35px] text-white relative font-poppins">
            Explore Matching Opportunities.
          </h1>
        </div>

        <div className="flex w-full md:flex-row flex-col items-center justify-center gap-5 mt-5">
          <div className="flex w-full max-w-[450px] bg-white px-3 overflow-hidden rounded-md justify-center items-center">
            <BusinessCenterIcon
              sx={{ fontSize: 25 }}
              className="text-orange-600 m-auto"
            />
            <SearchBar placeholder="Search your required service here" />
          </div>
          <div className="flex w-full max-w-[450px] bg-white px-3 overflow-hidden rounded-md justify-center items-center">
            <PlaceIcon
              sx={{ fontSize: 25 }}
              className="text-orange-600 m-auto"
            />
            <SearchBar placeholder=" Search your desired location here" />
          </div>
          <div>
            <button
              className="p-3 bg-[#00732F] hover:bg-[#258c50]
            active:scale-[.95] duration-200 ease-linear 
             w-28 rounded text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 mt-5">
          <p className="text-white font-poppins text-[16px] md:text-[18px] font-[650]">
            Are you a buyer?
          </p>
          <a
            href="#"
            className="text-white font-poppins  md:ml-0 text-[12px] md:text-[18px] font-[300] underline"
          >
            Click here if you are looking to post a requirement
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
