import React from "react";
import pic from "../assets/pic.png";

const twitterReviews = [
  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "Fixiconn’s livestreaming and powerful enterprise tools transformed our business—payments, messaging, and services are now hassle-free and ",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "With Fixiconn, I quickly found services, sent payments securely, and enjoyed engaging mini-games during my breaks.",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "Fixiconn’s enterprise features greatly boosted our advertising, helped us connect with clients, and simplified our payments process.",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "Livestreaming on Fixiconn is a total game-changer—plus, payments, messaging, and service bookings are so easy to manage!",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "Fixiconn’s livestreaming and powerful enterprise tools transformed our business—payments, messaging, and services are now hassle-free and ",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "With Fixiconn, I quickly found services, sent payments securely, and enjoyed engaging mini-games during my breaks.",
  },

  {
    image: { pic },
    name: "James madison",
    handle: "@jamesmad",
    reviews:
      "Fixiconn’s enterprise features greatly boosted our advertising, helped us connect with clients, and simplified our payments process.",
  },
];
const Reviews = () => {
  return (
    <div className="layout text-[#171717] ">
      <div className="mx-auto w-[715px] h-[125px] text-center ">
        <h1 className="text-[56px] font-bold font-[satoshi]  h-[68px]">
          Reviews from over 100k users
        </h1>
        <p className="text-18px w-[501px] h-[54px] font-[satoshi] font-semibold text-[#595959] text-center mx-auto ">
          Discover a platform to Stay connected with loved ones, share <br />{" "}
          your life’s moments.
        </p>
      </div>

      <div className=" flex gap-[10px] scrolling whitespace-normal">
        {twitterReviews.map((items, index) => {
          return (
            <div
              key={index}
              className="w-[391px] h-[187px] rounded-[16px] border-[1px] bg-[#FFFFFF] px-3 "
            >
              <div className=" flex flex-col  gap-5 w-[343px] h-[146px] mx-auto mt-5">
                <div className="flex w-[186px] h-[48px] ">
                  <img src={items.image.pic} alt="" />
                  <div className="w-[186px] h-[48px]">
                    <h1 className="text-[18px]">{items.name}</h1>
                    <p className="text-[18px] text-[#66707F]">{items.handle}</p>
                  </div>
                </div>
                <div>
                  <p className="">{items.reviews}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
