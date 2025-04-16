import React from "react";

const testimonial = [
  {
    header: "confort",
    description:
      "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },

  {
    header: "Insurance",
    description:
      "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },

  {
    header: "Commitment",
    description:
      "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];
const Experience = () => {
  return (
    <div className="layout h-[456px] w-[1241px]  ">
      <div className="max-w-[396px]">
        <h1 className="font-bold text-[38px] font-Satoshi ">
          Experience luxury without compromises
        </h1>
      </div>
      {/* flex flex-col lg:flex lg:flex-row lg:gap-[26px] */}
      <div className="flex">
        {testimonial.map((item, index) => {
          return (
            <div className="  w-[385px] h-[298px] rounded-[14px] border-[1px] border-[#F1F1F1] py-[21px] px-[18px] shadow-xl ">
              <h1
                key={index}
                className="w-[126px] h-[38px] text-[28px] font-satoshi font-medium "
              >
                {item.header}
              </h1>
              <p className="mt-5">{item.description} </p>
            </div>
          );
        })}
      </div>
      <div className="layout mt-10 ">
        <div className="flex justify-between h-[97px] font-[satoshi]">
          <div>
            <p className="text-[24px]">
              Trusted by customers since{" "}
              <span className="font-bold font-[satoshi] text-[24px]">1990</span>
            </p>
          </div>

          <div className="flex gap-[52px]  text-[#5C5C5C]">
            <p className="text-[18px] font-[Satoshi]">
              Trusted customers <br />{" "}
              <span className="text-[#1D1D1D] font-bold text-[38px]">
                2000+
              </span>
            </p>

            <p className="text-[18px] font-[Satoshi]">
              Available cars <br />{" "}
              <span className="text-[#1D1D1D] font-bold text-[38px]">134+</span>
            </p>
            <p className="text-[18px] font-[Satoshi]">
              Total reservation <br />{" "}
              <span className="text-[#1D1D1D] font-bold text-[38px]">
                {" "}
                134+
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
