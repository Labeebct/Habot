import React from "react";

const Button = React.memo(({ text }) => {
  return (
    <button className="border-solid border text-slate-600 text-[18px]  border-[#E7760D] py-4 w-full min-w-[17rem] rounded-sm font-semibold hover:bg-[#E7760D] hover:text-white">
      {text}
    </button>
  );
});

export default Button;
