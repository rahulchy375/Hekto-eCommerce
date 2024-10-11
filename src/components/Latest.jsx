import React, { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import saleImg from "/sales.png";

const Latest = () => {
  let newArrive = useRef();
  let bestSeller = useRef();
  let feature = useRef();
  let allProduct = useSelector((state) => state.product.data);
  // console.log(allProduct);

  let [filteredProduct, setFilteredProduct] = useState([]);
  const handleNewArrival = () => {
    let newArrival = allProduct.filter(
      (item) => item.product === newArrive.current.innerText.toLowerCase()
    );
    setFilteredProduct(newArrival);
  };

  const handleBestSeller = () => {
    let bestSell = allProduct.filter(
      (item) => item.product === bestSeller.current.innerText.toLowerCase()
    );
    setFilteredProduct(bestSell);
  };
  const handleFeature = () => {
    let featuredPro = allProduct.filter(
      (item) => item.product === feature.current.innerText
    );
    setFilteredProduct(featuredPro);
  };

  useEffect(() => {
    let newArrival = allProduct.filter(
      (item) => item.product === newArrive.current.innerText.toLowerCase()
    );
    setFilteredProduct(newArrival);
  }, [allProduct]);
  // console.log(filteredProduct);

  return (
    <section id="latestSection">
      <div className="container mx-auto p-[10px]">
        <h2 className="text-center text-[27px] sm:text-[35px] text-[#151875] font-bold mt-[30px] cursor-default">
          Latest Product
        </h2>
        <ul className="flex gap-[15px] sm:gap-[30px] justify-center items-center text-[#151875]  mb-[50px]">
          <li
            className="hover:text-pink-500 hover:underline duration-300 font-semibold cursor-pointer text-[13px] sm:text-[16px]"
            onClick={handleNewArrival}
            ref={newArrive}
          >
            New Arrival
          </li>
          <li
            className="hover:text-pink-500 hover:underline duration-300 font-semibold cursor-pointer text-[13px] sm:text-[16px]"
            onClick={handleBestSeller}
            ref={bestSeller}
          >
            Best Seller
          </li>
          <li
            className="hover:text-pink-500 hover:underline duration-300 font-semibold cursor-pointer text-[13px] sm:text-[16px]"
            onClick={handleFeature}
            ref={feature}
          >
            Featured
          </li>
        </ul>

        <div className="">
          <div className="flex flex-wrap justify-center gap-[20px]">
            {filteredProduct.map((item, i) => (
              <div
                className="w-[70%] sm:w-[45%] md:w-[27%] border rounded-[5px]"
                key={i}
              >
                <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#FFFFFF] h-[250px] sm:h-[300px] rounded-t-[5px] relative group overflow-hidden">
                  <img src={item.image} alt="" />

                  <div className="absolute top-[-60px] left-[5px] h-0 group-hover:top-[5px] duration-300">
                    <img src={saleImg} alt="" />
                  </div>

                  <div className="absolute overflow-hidden bottom-[0px] left-[10px] h-0 group-hover:h-[130px] duration-300">
                    <div className="">
                      <IoCartOutline className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                      <CiHeart className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                      <HiMagnifyingGlassPlus className="text-[30px] text-[#1DB4E7] hover:bg-[#EEEFFB] rounded-full p-[5px] hover:text-[#2F1AC4]" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center px-[10px] py-[5px]">
                  <p className="text-[#151875] font-josefin">{item.title}</p>
                  <div className="flex gap-[5px]">
                    <p className="text-[#151875] font-josefin">${item.price}</p>
                    <p className="text-pink-600 font-josefin">
                      <del>
                        ${(item.price + (item.price / 100) * 5).toFixed(2)}
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
