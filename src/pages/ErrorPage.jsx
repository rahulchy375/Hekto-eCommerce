import React from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import errorImg from "/images/errorImg.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <HeadingReuse heading="404 Not Found" toLink="/" toPage="Home" />
      <section>
        <div className="container mx-auto p-[10px]">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img src={errorImg} alt="" />
            </div>
            <h3 className="text-[#1D3178] text-[15px] sm:text-[20px] font-bold mb-[20px] sm:mb-[35px]">
              ooPs! The page you requested was not found!
            </h3>

            <button className="bg-pink-600 text-white outline-none rounded-[5px] px-[35px] py-[7px] mb-[20px]">
              {" "}
              <Link to="/">Back to Home</Link>{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
