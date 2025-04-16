import React from "react";
import search from "../assets/search.png"
import line from "../assets/line.png"
import park from "../assets/park.png"
import happy from "../assets/happy.png"

const costomerOptions = [
  {
    options: "Search For Vechicles",
    details:
      "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate",
  },

  {
    options: "Select and make Agreement",
    details:
      "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate",
  },

  { options: "Enjoy reliable Vechicle", details: "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate"},
];

const HowItWorks = () => {
  return (
    <div className="layout w-[1241px] h-[366px] mt-[30px]">
      <div className="w-[599px] h-[126px] mx-auto text-center ">
        <h1 className="text-[38px] font-bold font-satoshi">
          How rental works at Trex vehicles
        </h1>
        <p className="text-[18px] ">
          Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="hidden lg:flex justify-between py-10 w-[950px] mx-auto">
        <img src={search} alt="#" className="h-[27px] w-[27px] " />
        <img src={line} alt="#" className="h-[8px]" />
        <img src={park} alt="#" />
        <img src={line} alt="#" className="h-[8px]" />
        <img
          src={happy}
          alt="#"
          className="bg-[#FFFFFF] border-[#F1F1F1] rounded-[8px] h-[27px] w-[27px] "
        />
      </div>
      <div className="flex flex-col lg:flex-row h-[170px] w-[1239px] justify-between">
        {costomerOptions.map((items, index) => {
          return (
            <div className="text-center w-[371px]">
              <h1
                key={index}
                className="text-[28px] font-bold font-satoshi text-[#000000]"
              >
                {items.options}
              </h1>
              <p className="text-[#5C5C5C] text[18px] ">{items.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
