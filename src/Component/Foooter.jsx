import React from 'react'
import logo from "../assets/blacklogo.png"

const footerlinks = [
  { title: "Home", to: "#" },
  { title: "Contact Us", to: "#" },
  { title: "Gallery", to: "#gallery" },
  { title: "Service", to: "#" },
  { title: "How It Works", to: "#" },
  { title: "Privacy", to: "#" },
  { title: "Terms & Service", to: "#" },
];



const Foooter = () => {
  return (
    <footer className="layout">
      <div className="h-[118.57]">
        <div className='className=" flex items-center justify-between  h-[28.57px]'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-[24px] underline">
            {footerlinks.map((items, index) => {
              return (
                <a key={index} href={items.to}>
                  {items.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-[15px] mt-5">
        This website is owned and operated by Masref Ltd., incorporated in the
        United Kingdom The information provided is not legally binding and does
        not constitute an offering, endorsement, recommendation or solicitation
        to enter into any type of financial transaction in this or in any other
        jurisdiction in which such solicitation or offer would be unlawful under
        the laws of such jurisdiction.
      </p>
    </footer>
  );
}

export default Foooter