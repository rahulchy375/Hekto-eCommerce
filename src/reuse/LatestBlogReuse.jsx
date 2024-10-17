import React from "react";
import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const LatestBlogReuse = ({ blog1, title, para }) => {
  return (
    <>
      <div className="w-[270px] sm:w-[47%] group lg:w-[30%] xl:w-[350px] mb-[30px] latestBlogs rounded-[10px]">
        <div className="">{blog1}</div>
        <div className="flex justify-between sm:justify-start sm:gap-[25px] p-[10px]">
          <div className="flex items-center gap-[5px] mt-[7px] text-[#151875]">
            <FaPenNib className="text-pink-600" /> Mr. Fox
          </div>
          <div className="flex items-center gap-[5px] mt-[7px] text-[#151875]">
            {" "}
            <MdDateRange className="text-orange-500" />
            21.August.2024
          </div>
        </div>
        <div className="text-center sm:text-left  p-[10px] pt-0">
          <h3 className="text-[17px] font-bold text-[#151875] mb-[10px] mt-[7px] group-hover:text-pink-600 duration-300">
            {title}
          </h3>
          <p className="text-[#72718F]">{para}</p>
          <button className="mt-[15px] mb-[10px] underline text-[#151875] group-hover:text-pink-600 duration-300 font-semibold">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestBlogReuse;
