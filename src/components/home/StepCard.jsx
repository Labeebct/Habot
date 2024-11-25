import React from "react";

const StepCard = ({ imageSrc, title, bgColor }) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-5 p-4 ${bgColor}`}>
      <img src={imageSrc} alt={title} className="w-[74px] h-[74px]" />
      <h1 className="text-[18px] font-poppins font-[500] leading-[26px] px-4 text-center">
        {title}
      </h1>
    </div>
  );
};

export default StepCard;
