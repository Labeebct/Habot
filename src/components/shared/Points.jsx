import React from "react";

const Points = ({ text }) => {
  return (
    <>
      <div className="flex items-center  w-[80%]">
        <div className="w-[10%] ">
          <img
            src="/assets/checked.png"
            alt="chech-icons"
            className="w-[20px] h-[20px] "
          />
        </div>
        <div className="w-[90%] ">
          <h1 className="text-[16px] font-poppins text-white">
            {text}
          </h1>
        </div>
      </div>
    </>
  );
};

export default React.memo(Points);
