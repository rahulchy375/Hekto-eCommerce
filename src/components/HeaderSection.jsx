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

  let [popup, setPopup] = useState(false);

  const handleLogOut = () => {
    setPopup(!popup);
  };

  const handleLogOutYes = () => {
    dispatch(logOut());
    setPopup(false);
  };

  console.log(popup);

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
              {loginCheck ? (
                <div className="" onClick={handleLogOut}>
                  <div className="cursor-pointer flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]">
                    Log Out <IoPersonOutline />
                  </div>
                  {popup && (
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center flex-col text-black w-[260px] bg-white rounded-[5px] px-[20px] py-[30px] LogoutConfirmDiv">
                      <h2 className="mb-[10px] text-[18px] font-semibold">Are you sure to log out?</h2>
                      <div className="">
                        <button
                          onClick={() => setPopup(!popup)}
                          className="mr-[20px] border border-[#FB2E86] hover:bg-[#FB2E86] w-[100px] py-[7px] text-black hover:text-white duration-300 rounded-[5px]"
                        >
                          Cancel
                        </button>
                        <button onClick={handleLogOutYes} className="bg-[#FB2E86] w-[100px] py-[7px] text-white rounded-[5px]"><Link>Yes</Link></button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center mb-[10px] sm:mb-[0px] sm:mr-[10px]"
                >
                  Log In <IoPersonOutline />
                </Link>
              )}
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
