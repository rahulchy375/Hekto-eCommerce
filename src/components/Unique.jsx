import React from "react";
import uniqueImg from "/images/uniqueImg.png";

const Unique = () => {
  return (
    <section id="uniqueSection" className="bg-[#F1F0FF]">
      <div className="container mx-auto p-[10px]">
        <div className="mt-[25px] flex">
          <div className="hidden sm:block md:flex justify-center xl:justify-end xl:mr-[20px] items-center">
            <img src={uniqueImg} alt="" className="md:w-[80%] xl:w-[70%]" />
          </div>
          <div className="">
            <h3 className="text-[#2F1AC4] lg:w-[80%] xl:w-[70%] text-[21px] md:text-[27px] md:mb-[20px] font-bold text-center sm:text-left">
              Unique Features Of latest & Trending Products
            </h3>
            <div className="flex items-center relative">
              <div className="w-[7px] h-[7px] rounded-full bg-[#F52B70] absolute"></div>
              <p className="ml-[15px] text-[#ACABC3] text-[14px] xl:w-[70%] md:text-[16px]">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex items-center relative">
              <div className="w-[7px] h-[7px] rounded-full bg-[#2B2BF5] absolute"></div>
              <p className="ml-[15px] text-[#ACABC3] text-[14px] xl:w-[70%] md:text-[16px]">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            <div className="flex items-center relative">
              <div className="w-[7px] h-[7px] rounded-full bg-[#2BF5CC] absolute"></div>
              <p className="ml-[15px] text-[#ACABC3] text-[14px] xl:w-[70%] md:text-[16px]">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
            <div className="flex justify-center items-center sm:hidden">
              <img src={uniqueImg} alt="" className="w-[80%]" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-[20px]">
              <div className="order-2 sm:order-1">
                <button className="outline-none text-[13px] sm:text-[16px] my-[20px] border-none bg-[#FB2E86] text-white rounded-[3px] py-[7px] px-[15px]">
                  Add To Cart
                </button>
              </div>

              <div className="order-1 sm:order-2 text-center sm:text-left sm:ml-[15px]">
                <h3 className="text-[#2F1AC4] text-[16px] font-bold leading-[15px]">
                  B&B Italian Sofa{" "}
                </h3>
                <p className="text-[#2F1AC4] text-[15px] font-semibold">
                  $300.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
