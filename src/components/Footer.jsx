import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <section id="footerSection" className="bg-[#EEEFFB]">
        <div className="container mx-auto p-[10px]">
          <div className="lg:flex justify-between xl:justify-around lg:my-[50px]">
            <div className="">
              <h1 className="text-[27px] lg:text-[30px] font-bold">Hekto</h1>
              <div className="bg-white inline-block rounded-[5px] py-[2px] pl-[5px]">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="outline-none"
                />
                <button className="bg-[#FB2E86] text-white rounded-[5px] py-[4px] px-[15px]">
                  Sign up
                </button>
              </div>
              <div className="text-[#8A8FB9]">
                <p className="font-semibold sm:text-[19px]">Contact Info:</p>
                <p>Shagorika Road, pahartali, Chattogram</p>
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-[50px] xl:gap-[60px] mt-[20px] lg:mt-[0px] text-[#8A8FB9]">
              <div className="text-[13px] sm:text-[15px] lg:text-[17px]">
                <h2 className="text-[17px] sm:text-[19px] text-black lg:text-[21px] font-bold">
                  Category
                </h2>
                <ul>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Laptops & Computers
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Cameras & Photography
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Smart Phones & Tablets
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Video Games & Consoles
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Waterproof Headphones
                  </li>
                </ul>
              </div>
              <div className="text-[13px] sm:text-[15px] lg:text-[17px] sm:text-center">
                <h2 className="text-[17px] sm:text-[19px] text-black lg:text-[21px] font-bold">
                  Customer Care
                </h2>
                <ul>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    My Account
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Discount
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Returns
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Orders History
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Order Tracking
                  </li>
                </ul>
              </div>
              <div className="text-[13px] sm:text-[15px] lg:text-[17px] mt-[10px] sm:mt-0 sm:text-right">
                <h2 className="text-[17px] sm:text-[19px] text-black lg:text-[21px] font-bold">
                  Pages
                </h2>
                <ul>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Blog
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Browse the Shop
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Category
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Pre-Built Pages
                  </li>
                  <li className="hover:text-pink-600 duration-300 hover:underline">
                    Visual Composer Elements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E7E4F8]">
        <div className="container mx-auto p-[10px]">
          <div className="sm:flex justify-between items-center md:justify-around">
            <div className="flex item-center text-[#9DA0AE]">
              <AiOutlineCopyright /> Rahul Chowdhury - All Rights Reserved
            </div>
            <div className="flex gap-[10px] my-[10px] text-white">
              <div className="w-20px h-20px rounded-full bg-[#151875] p-[3px]">
                <FaFacebookF />
              </div>
              <div className="w-20px h-20px rounded-full bg-[#151875] p-[3px]">
                <IoLogoInstagram />
              </div>
              <div className="w-20px h-20px rounded-full bg-[#151875] p-[3px]">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
