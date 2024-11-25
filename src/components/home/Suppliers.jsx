import React from "react";

const Suppliers = () => {
  return (
    <div className="py-10 h-auto w-full bg-[#E8FBFF] flex justify-center my-10">
      <div className="px-5 lg:px-20 w-full h-auto gap-6 flex-col md:flex-row flex items-center justify-between">
        <h1 className="text-[24px] md:text-[26px] lg:text-[30px] font-poppins font-semibold">
          Let Suppliers <span className="border-b-[#EB7150] border-b-4">Find You</span>
        </h1>
        <button className="h-[54px] w-[216px] duration-200 ease-linear transition-all active:scale-[.95] cursor-pointer rounded bg-[#EB7150] hover:bg-[#fb7550]  text-[18px] font-Poppins font-[700] text-white leading-6">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default Suppliers;
