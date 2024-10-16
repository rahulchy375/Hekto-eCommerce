import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

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
            } fixed z-10 sm:static text-right text-[#F1F1F1] bg-[#b686f6] p-[10px] rounded-[5px] sm:flex sm:bg-transparent sm:text-black sm:font-semibold md:text-[18px]`}
          >
            <li className="mb-[5px] sm:mb-0 mr-[10px]"> <Link to="/">Home</Link> </li>
            <li className="mb-[5px] sm:mb-0 mr-[10px] group relative">
              Pages{" "}
              <div className="absolute w-[130px] sm:left-[50%] sm:translate-x-[-50%] sm:top-[70px] md:top-[77px] text-black top-[50%] translate-y-[-50%] left-[-130px] bg-[#f4f5f5] text-left group-hover:p-[10px] rounded-[7px] h-0 group-hover:h-auto overflow-hidden">
                <div> <Link to="/about">About us</Link></div>
                <div> <Link to="/faq">FAQs</Link> </div>
                <div> <Link to="/">My Account</Link> </div>
              </div>{" "}
            </li>
            <li className="mb-[5px] sm:mb-0 mr-[10px]"><Link to="/shop">Shop</Link></li>
            <li className="mb-[5px] sm:mb-0 mr-[10px]">Blogs</li>
            <li className=""><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="order-3 sm:hidden" onClick={handleBar}>
            {bars === true ? <VscChromeClose /> : <FaBars />}
          </div>
          <div className="order-2 flex justify-center items-center relative ">
            <input
              type="text"
              placeholder="Search Product.."
              className="bg-slate-100 pl-[5px] rounded-[5px] sm:px-[15px] sm:py-[4px] outline-none lg:w-[250px]"
            />
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
