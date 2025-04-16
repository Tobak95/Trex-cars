import React from 'react'
import search from "../assets/search.png";
import line from "../assets/line.png";
import park from "../assets/park.png";
import happy from "../assets/happy.png";


const HowisWorks2 = () => {
  return (
    <section className="layout py-[40px]">
      <div className="text-center mb-10">
        <h1 className="font-bold text-[38px] mb-4 text-[#1d1d1d]">
          How rental works at Trex vehicles
        </h1>
        <p className="font-medium text-[#5c5c5c] text-[18px]">
          Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc{" "}
          <br />
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="flex items-center justify-between text-center flex-col lg:flex-row gap-6">
        <div className="relative">
          <img
            src={line}
            alt=""
            className="absolute end-[-100px] top-6 hidden lg:block"
          />
          <div className="w-[58px] h-[58px] rounded-[8px] mx-auto border-[1px] border-[#f1f1f1] flex justify-center items-center">
            <img src={search} alt="" />
          </div>
          <h1 className="font-bold text-[28px] my-3.5">Search For Vehicle</h1>
          <p className="text-[#5c5c5c] text-[18px]">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate
          </p>
        </div>
        <div className="relative">
          <img
            src={line}
            alt=""
            className="absolute end-[-100px] top-6 hidden lg:block"
          />
          <div className="w-[58px] h-[58px] rounded-[8px] mx-auto border-[1px] border-[#f1f1f1] flex justify-center items-center relative">
            <img src={park} alt="" />
          </div>
          <h1 className="font-bold text-[28px] my-3.5">
            Select and make Agreement
          </h1>
          <p className="text-[#5c5c5c] text-[18px]">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate
          </p>
        </div>
        <div>
          <div className="w-[58px] h-[58px] rounded-[8px] mx-auto border-[1px] border-[#f1f1f1] flex justify-center items-center">
            <img src={happy} alt="" />
          </div>
          <h1 className="font-bold text-[28px] my-3.5">
            Enjoy reliable vehicle
          </h1>
          <p className="text-[#5c5c5c] text-[18px]">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate
          </p>
        </div>
      </div>
          
    </section>
  );
}

export default HowisWorks2