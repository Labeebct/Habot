import { useState } from "react";
import Points from "../shared/Points";

const VideoSec = () => {

  // State for changing the condents
  const [process, setProcess] = useState(true);
  let data = {
    Buyer: [
      "Post your requirements.",
      "Sit back for multiple suppliers to contact you.",
      `Choose among the suppliers based on the ratings and reviews.`,
    ],

    Supplier: [
      "Complete your profile and get verified.",
      `Choose service tags and get notified about each opportunity.`,
      `Contact buyers, and expand your business.`,
    ],
  };

  return (
    <div className="h-auto py-10 w-full px-5 lg:px-10">
      <div className="h-full w-full  py-10 grid grid-cols-1 sm:justify-center sm:items-center rounded bg-[#072F57] lg:flex">
        <div className="left lg:w-[50%] w-full flex items-center justify-center relative py-10">
          {/* Video frame */}
          <iframe
            src="https://www.youtube.com/embed/i8tgRHXx4oQ"
            title="YouTube video"
            className="h-[300px] lg:h-[400px] w-[90%]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="lg:h-[480px] h-[300px] lg:w-[45%] w-full flex flex-col justify-center items-center p-4">
          <div className="title flex w-full justify-around items-center h-[80px]">
            <div
              onClick={() => setProcess(true)}
              className={`buyer w-[40%] h-full flex items-center justify-center cursor-pointer ${
                process === true
                  ? "text-[#f2804b] border-b-4 border-[#f2804b]"
                  : "text-white border-none"
              }`}
            >
              <h1 className="text-[18px] lg:text-[30px] font-poppins font-medium">
                Buyer
              </h1>
            </div>
            <div
              onClick={() => setProcess(false)}
              className={`supplier w-[40%] h-full flex items-center justify-center cursor-pointer ${
                process === false
                  ? "text-[#f2804b] border-b-4 border-[#f2804b]"
                  : "text-white border-none"
              }`}
            >
              <h1 className="text-[18px] lg:text-[30px] font-poppins font-medium">
                Supplier
              </h1>
            </div>
          </div>

          <div className="data h-full w-full flex pt-[25px] lg:pt-[60px]">
            <div className="flex flex-col gap-3">
              {/* Points */}
              <Points
                text={process === true ? data.Buyer[0] : data.Supplier[0]}
              />
              <Points
                text={process === true ? data.Buyer[1] : data.Supplier[1]}
              />
              <Points
                text={process === true ? data.Buyer[2] : data.Supplier[2]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
