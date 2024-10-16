import React from "react";
import { CiHeart } from "react-icons/ci";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

const Post = ({setPost}) => {
  return (
    <>
      <div className="ml-[10px] sm:ml-[20px] flex gap-[2%] flex-wrap">
        {setPost.map((item, i) => (
          <div
            className=" mb-[40px] w-[98%] sm:w-[49%] lg:w-[23%]  group"
            key={i}
          >
            <div className="bg-[#F6F7FB] hover:bg-[#EBF4F3] duration-300 h-[250px] flex justify-center items-center p-[15px] relative">
              <img src={item.image} alt="" />
              <div className="absolute overflow-hidden bottom-[0px] left-[10px] h-0 group-hover:h-[130px] duration-300">
                <div className="">
                  <IoCartOutline className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                  <CiHeart className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                  <HiMagnifyingGlassPlus className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                </div>
              </div>
            </div>
            <div className=" text-center px-[10px] py-[5px]">
              <p className="text-[#151875] font-josefin">{item.title}</p>
              <div className="flex justify-center items-center gap-[5px]">
                <p className="text-[#151875] font-josefin">${item.price}</p>
                <p className="text-pink-600 font-josefin">
                  <del>${(item.price + (item.price / 100) * 5).toFixed(2)}</del>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;