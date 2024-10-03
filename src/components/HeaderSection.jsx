import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";

const HeaderSection = () => {
  let [threeDot, setThreeDot] = useState(false);
  let handleThreeDot = () => {
    setThreeDot(!threeDot);
  };

  console.log(threeDot);

  return (
    <section id="headerSection" className="bg-[#7E33E0]">
      <div className="container mx-auto p-[10px]">
        <div className="flex justify-between items-center text-[#F1F1F1]">
          <div className="md:flex">
            <div className="flex items-center text-[15px] md:text-[16px] font-semibold md:mr-[15px]">
              {" "}
              <GrMail className="mr-[5px]" /> rahulchy375@gmail.com
            </div>
            <div className="flex items-center text-[15px] font-semibold">
              {" "}
              <MdPhoneInTalk className="mr-[5px]" /> (+880)1884805902
            </div>
          </div>
          <div className="visible sm:hidden" onClick={handleThreeDot}>
            <BsThreeDotsVertical className="text-[22px]"/>
          </div>
          <div
            className={`${
              threeDot === true
                ? "top-[50px] right-0 duration-300"
                : "top-[50px] right-[-150px] duration-300"
            } sm:flex items-end fixed z-10 top-[36px] sm:static overflow-x-hidden bg-[#b686f6] sm:bg-transparent p-[10px] sm:p-[0px] rounded-[5px]`}
          >
            <div className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
              English <FaAngleDown />
            </div>
            <div className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
              Login <IoPersonOutline />
            </div>
            <div className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
              Wishlist <CiHeart />
            </div>
            <div className="">
              <IoCartOutline className="text-[25px] mb-[10px] sm:mb-[0px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
