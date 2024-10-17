import React from "react";
import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import blog1 from "/images/blog1.png";
import blog2 from "/images/blog2.png";
import blog3 from "/images/blog3.png";
import LatestBlogReuse from "../reuse/LatestBlogReuse";

const LatestBlog = () => {
  return (
    <section id="latestBlogSection">
      <div className="container mx-auto p-[10px]">
        <h2 className="text-center text-[27px] font-bold text-[#151875] mb-[15px] sm:mb-[25px]">
          Latest Blogs
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between xl:justify-center xl:gap-[40px] items-center">
          <LatestBlogReuse
            blog1={<img src={blog1} alt="" />}
            title="Top esssential Trends in 2021"
            para="More off this less hello samlande lied much over tightly circa horse
            taped mightly"
          />
          <LatestBlogReuse
            blog1={<img src={blog2} alt="" className="rounded-[6px]"/>}
            title="Top esssential Trends in 2021"
            para="More off this less hello samlande lied much over tightly circa horse
            taped mightly"
          />
          <LatestBlogReuse
            blog1={<img src={blog3} alt="" />}
            title="Top esssential Trends in 2021"
            para="More off this less hello samlande lied much over tightly circa horse
            taped mightly"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
