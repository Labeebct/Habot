import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    imageSrc: "/assets/first.png",
    title: "Select Your Role and Sign Up",
    bgColor: "bg-[#E8FBFF]",
  },
  {
    imageSrc: "/assets/second.png",
    title: "Buyers Post Your Requirements",
    bgColor: "",
  },
  {
    imageSrc: "/assets/third.png",
    title: "Review, Select, and Contact the Best Suppliers",
    bgColor: "bg-[#E8FBFF]",
  },
  {
    imageSrc: "/assets/forth.png",
    title: "Suppliers Complete your profile and get notified for opportunities",
    bgColor: "",
  },
  {
    imageSrc: "/assets/fifth.png",
    title: "Contact Buyers and Share your Quote for the service",
    bgColor: "bg-[#E8FBFF]",
  },
  {
    imageSrc: "/assets/sixth.png",
    title: "Both Parties can Connect and Make Business, Leave a Feedback",
    bgColor: "",
  },
];

const Section = () => {
  return (
    <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-auto md:h-[508px]">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          imageSrc={step.imageSrc}
          title={step.title}
          bgColor={step.bgColor}
        />
      ))}
    </div>
  );
};

export default Section;
