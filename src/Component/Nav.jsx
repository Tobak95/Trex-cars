import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const links = [
  { title: "Home", to: "#" },
  { title: "Gallery", to: "#gallery" },
  { title: "Service", to: "#" },
  { title: "How It Works", to: "#" },
];
const Nav = () => {
  const [isMenuOPen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#090909AB]">
      <div className="layout flex items-center justify-between h-[105px]">
        <div>
          <img src={logo} alt="trex logo" />
        </div>
        <div className="hidden lg:flex gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.a}>
                {link.title}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#fdfdfd] w-[139px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
            Contact us
          </button>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOPen)}
            className="text-white"
          >
            {isMenuOPen ? <MdClose size={35} /> : <IoMenu size={35} />}
          </button>
        </div>
        {/* mobile screen menu */}
        {isMenuOPen && (
          <div className="text-white lg:hidden absolute top-[105px] w-1/2 left-[0px] p-2.5">
            <div className="flex-col flex gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
              {links.map((link, index) => {
                return (
                  <a key={index} href={link.a}>
                    {link.title}
                  </a>
                );
              })}
            </div>
            <button className="bg-[#fdfdfd] w-[139px] h-[42px] rounded-[44px] text-[#1d1d1d] mt-[40px] font-bold text-[16px]">
              Contact us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
