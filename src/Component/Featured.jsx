import React from "react";
import { cars } from "../data";
import { BiCategory } from "react-icons/bi";
import { useState } from "react";
import SingleCar from "./SingleCar";

// set give us unique values from an array
const categories = ["all", ...new Set(cars.map((car) => car.category))];

const Featured = () => {
  const [selected, setSelected] = useState("all");
  const featuredcars =
    selected === "all" ? cars : cars.filter((car) => car.category === selected);

  return (
    <div className="layout ">
      <div className="max-w-[517px]">
        <h1 className="text-[38px] font-bold text-[#1d1d1d]">
          Featured Vechicles
        </h1>
        <p className="text-[#5c5c5c] font-medium text-lg my-4">
          Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="flex items-center gap-[20px] md:gap-[30px]">
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelected(category)}
              key={category}
              className={
                category === selected
                  ? "bg-black text-white px-5 py-3 rounded-lg capitalize cursor-pointer"
                  : "px-5 py-3 rounded-lg capitalize cursor-pointer border border-black"
              }
            >
              {category}
            </button>
          );
        })}
      </div>


      <div className="mt-7 flex items-center justify-between flex-wrap">
        {
          featuredcars.map((car, index) =>{
            return <SingleCar key={index} {...car}/>
          })
        }
      </div>
    </div>
  );
};

export default Featured;
