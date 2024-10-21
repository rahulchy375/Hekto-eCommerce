import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const DiscountReuse = ({heading,sub,para,one,two,three,four,bg,discountImg}) => {
  return (
    <>
      <div className="text-center sm:text-left sm:flex justify-between items-center">
        <div className="">
          <h3 className="text-[#151875] font-bold text-[17px] sm:text-[25px] mt-[20px]">
            {heading}
          </h3>
          <p className="text-pink-600 sm:text-[18px] font-semibold">
            {sub}
          </p>
          <p className="text-[#B7BACB] my-[10px] lg:w-[80%]">
            {para}
          </p>
          <div className="text-[#B7BACB]">
            <div className="">
              <div className="flex items-center gap-[5px]">
                <IoCheckmark />
                <p>{one}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <IoCheckmark />
                <p>{two}</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-[5px]">
                <IoCheckmark />
                <p>{three}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <IoCheckmark />
                <p>{four}</p>
              </div>
            </div>
          </div>
          <div className="relative mt-[20px] sm:hidden">
            {bg}
            {discountImg}
          </div>
          <div className="flex justify-center items-center sm:justify-start">
            <button className="outline-none border-none bg-pink-600 text-white py-[5px] px-[20px] mt-[20px]">
              <Link to="/shop">Shop Now</Link>
              
            </button>
          </div>
        </div>

        <div className="relative mt-[20px] hidden sm:block sm:ml-[10px] lg:flex justify-center items-center">
          <div className="lg:w-[80%]">
          {bg}
          {discountImg}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountReuse;
