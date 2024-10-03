import React from "react";
import mainImg from "/mainImg.png";
import mainImg2 from "/mainImg2.png";

const MainSection = () => {
  
  return (
    <section id="mainSection" className="bg-[#F2F0FF] relative">
      <div className="container mx-auto p-[10px] sm:pt-0 ">
        <div className="sm:flex">
          <div className="hidden sm:block sm:w-[15%] md:w-[10%] xl:w-[8%] sm:mr-[20px] xl:mr-[35px]">
            <img src={mainImg2} alt="decoration Image" className=""/>
          </div>
          <div className="text-center sm:text-left mt-[30px] lg:mt-[60px] sm:w-[50%] lg-[40%]">
            <h2 className="text-[#FB2E86] ">
              Best Furniture For Your Castle....
            </h2>
            <h1 className="text-[23px] md:text-[30px] lg:text-[42px] xl:text-[45px] font-bold my-[15px]">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-[15px] md:text-[18px] lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              illo obcaecati possimus! Animi, excepturi unde.
            </p>
            <div className="my-[50px] sm:my-0  ">
              <img src={mainImg} alt="Main Image" className="w-[70%] mx-auto sm:mx-0 sm:absolute top-[40px] right-0 md:right-[30px] xl:right-[60px] sm:w-[35%] md:w-[30%] lg:w-[27%] sm:mr-[10px]" />
            </div>
            <button className="border-none text-white outline-none bg-[#FB2E86] font-semibold mb-[30px] py-[5px] px-[15px] sm:mt-[30px] lg:mb-[70px]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
