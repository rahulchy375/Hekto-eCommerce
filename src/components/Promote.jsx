import React from "react";
import promoteImg from "/images/promoteImg.png";


const Promote = () => {
  return (
    <>
      <section
        id="promoteSection"
        className="bg-no-repeat bg-cover bg-center my-[30px] sm:my-[50px]"
        style={{ backgroundImage: `url(${promoteImg})` }}
      >
        <div className="container mx-auto p-[10px]">
          <div className="text-center py-[30px] sm:pt-[60px] lg:py-[50px] lg:pt-[100px]">
            <div className="flex justify-center items-center">
              <h2 className="text-[#151875] sm:w-[50%] lg:w-[30%] xl:w-[25%] text-[22px] font-bold ">
                Get Leatest Update By Subscribe 0ur Newslater
              </h2>
            </div>

            <button className="mt-[20px] bg-pink-600 text-white outline-none py-[5px] px-[15px]">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Promote;
