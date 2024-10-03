import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const NavSection = () => {
  let [bars, setBars] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };
  return (
    <section id="navSection">
      <div className="container mx-auto p-[10px]">
        <div className="flex justify-between items-center">
          <div className="text-[21px] sm:text-[25px] font-bold">Hekto</div>
            <ul
              className={`${
                bars === true
                  ? "top-[105px] right-[0px] duration-300"
                  : "top-[105px] right-[-100px] duration-300"
              } fixed z-10 overflow-x-hidden sm:static text-right text-[#F1F1F1] bg-[#b686f6] p-[10px] rounded-[5px] sm:flex sm:bg-transparent sm:text-black sm:font-semibold md:text-[18px]`}
            >
              <li className="mb-[5px] sm:mb-0 mr-[10px]">Home</li>
              <li className="mb-[5px] sm:mb-0 mr-[10px]">Shop</li>
              <li className="mb-[5px] sm:mb-0 mr-[10px]">About</li>
              <li className="mb-[5px] sm:mb-0 mr-[10px]">Blogs</li>
              <li className="">Contact</li>
            </ul>
          <div className="order-3 sm:hidden" onClick={handleBar}>
            {bars === true ? <VscChromeClose /> : <FaBars />}
            
          </div>
          <div className="order-2 flex justify-center items-center relative ">
            <input type="text" placeholder="Search Product.." className="bg-slate-100 pl-[5px] rounded-[5px] sm:px-[15px] sm:py-[4px] outline-none lg:w-[250px]"/>
            <div className="bg-[#FB2E86] py-[4px] px-[8px] sm:py-[8px] sm:px-[8px] absolute top-50 right-[-15px] translate-x-[-50%]">
              <FaSearch />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSection;
