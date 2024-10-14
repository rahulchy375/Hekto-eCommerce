import React from "react";
import { Link } from "react-router-dom";

const HeadingReuse = ({heading, toLink,toPage,fromPage}) => {
  return (
    <section className="bg-[#F6F5FF]">
      <div className="container mx-auto p-[10px] py-[70px] mb-[50px] text-center sm:text-left">
        <h2 className="text-[35px] text-[#101750] font-bold">{heading}</h2>
        <div className="cursor-pointer text-[#101750]">
          <Link to={toLink} className="mr-[2px] hover:text-pink-600 duration-300">{toPage}</Link>.<Link className="ml-[2px] hover:text-pink-600 duration-300">{fromPage}</Link>
        </div>
      </div>
    </section>
  );
};

export default HeadingReuse;
