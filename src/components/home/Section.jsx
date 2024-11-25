const Section = () => {
    return (
      <>
        <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full  h-auto md:h-[508px]">
          <div className="bg-[#E8FBFF] flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/first.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Select Your Role and Sign Up
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/second.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Buyers Post Your Requirements
            </h1>
          </div>
          <div className="bg-[#E8FBFF] flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/third.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Review, Select, and Contact the Best Suppliers
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/forth.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Suppliers Complete your profile and get notified for opportunities
            </h1>
          </div>
          <div className="bg-[#E8FBFF] flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/fifth.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Contact Buyers and Share your Quote for the service
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 p-4">
            <img
              src="/assets/sixth.png"
              alt=""
              className="w-[74px] h-[74px]"
            />
            <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
              Both Parties can Connect and Make Business, Leave a Feedback
            </h1>
          </div>
        </div>
      </>
    );
  };
  
  export default Section;
  