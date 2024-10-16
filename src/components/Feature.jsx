import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "/img1.png";
import Slider from "react-slick";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { fetchProducts } from "../slice/productSlice";

const Feature = () => {
  let allProduct = useSelector((state) => state.product.data);
  console.log(allProduct);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the action when the component mounts
  }, [dispatch]);

  let [featuredProduct, setFeaturedProduct] = useState([]);
  useEffect(() => {
    if (allProduct.length > 0) {
      let filtering = allProduct.filter((item) =>
        item.product.includes("Featured")
      );
      setFeaturedProduct(filtering);
    }
  }, [allProduct]);
  // console.log(featuredProduct);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id="featureSection">
      <div className="container mx-auto p-[10px]">
        <h2 className="text-[#1A0B5B] text-[27px] sm:text-[35px] font-bold text-center mt-[70px] mb-[20px]">
          Featured Products
        </h2>
        <Slider {...settings}>
          {featuredProduct.map((item, i) => (
            <div className="!flex justify-center pb-[15px] group" key={i}>
              <div className="shadow !w-[200px] rounded-[10px] ">
                <div className="h-[200px] flex justify-center items-center hover:bg-[#F7F7F7] bg-[#F6F7FB] rounded-t-[10px] rounded-r-[10px] rounded-b-[0px] group relative">
                  <img src={item.image} alt="" />

                  <div className="absolute top-[-40px] left-[10px] h-0 group-hover:top-[10px] duration-300">
                    <div className="flex gap-[5px]">
                      <IoCartOutline className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                      <CiHeart className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                      <HiMagnifyingGlassPlus className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                    </div>
                  </div>

                  <div className="absolute overflow-hidden bottom-0 h-[0px]  group-hover:h-[40px] duration-300">
                    <p className="inline-block bg-[#08D15F] py-[5px] px-[10px] rounded-[5px] text-white">
                      View Details
                    </p>
                  </div>
                </div>

                <div className="text-center h-[120px] pt-[15px] group-hover:bg-[#2F1AC4] rounded-b-[10px] duration-300 group-hover:text-white">
                  <h3 className="text-[#FB2E86] font-semibold leading-[1]">{item.title}</h3>
                  <p>code: y45it13</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feature;
