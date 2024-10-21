import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../slice/loginSlice";

const HeaderSection = () => {
  let cartProduct = useSelector((state) => state.product.cart);
  let loginCheck = useSelector((state) => state.login.value);
  let dispatch = useDispatch();
  let [threeDot, setThreeDot] = useState(false);
  let handleThreeDot = () => {
    setThreeDot(!threeDot);
  };

  // console.log(threeDot);

  return (
    <section id="headerSection" className="bg-[#7E33E0]">
      <div className="container mx-auto p-[10px]">
        <div className="flex justify-between items-center relative text-[#F1F1F1]">
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
            <BsThreeDotsVertical className="text-[22px]" />
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
            <div className="">
              {loginCheck ? 
              <div className="" onClick={() =>dispatch(logOut())}>
              <Link  className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
                Log Out <IoPersonOutline />
              </Link>
              <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center text-black w-[260px] bg-slate-200 rounded-[5px]">
                
              </div>
              </div>
              :
              <Link to="/login" className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
                Log In <IoPersonOutline />
              </Link>
              }
            </div>
            <div className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
              Wishlist <CiHeart />
            </div>
            <div className="">
              <Link to="/cart">
                <IoCartOutline className="text-[25px] mb-[10px] sm:mb-[0px]" />
                {cartProduct.length > 0 ? (
                  <div className="w-[25px] h-[25px] absolute bottom-[27px] right-[42px] md:top-[-10px] sm:top-[-2px] sm:right-[-10px] md:right-[-15px] bg-pink-200 rounded-full  text-blue-700 flex justify-center items-center">
                    {cartProduct.length}
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
