import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../api/product.json";
import { FaCommentDots, FaPenNib, FaRegHeart } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addingProduct, addingProductToCart } from "../slice/productSlice";

const ProductDetails = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let [activeTab, setActiveTab] = useState("Description");

  let [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    let product = productData.find((item) => item.id === parseInt(id));
    setSingleProduct(product);
  }, [id]);

  // console.log(singleProduct);

  if (!singleProduct) {
    return <p>Loading...</p>;
  }

  let ratings = Array.from({ length: 5 }, (_, index) => {
    return singleProduct.rating >= index + 1 ? (
      <IoMdStar key={index} />
    ) : singleProduct.rating >= 0.5 ? (
      <IoMdStarHalf key={index} />
    ) : (
      <IoMdStarOutline key={index} />
    );
  });

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  const handleAddingProduct = (item) =>{
    dispatch(addingProductToCart({...item, qan:1}))
  }

  return (
    <>
      <section>
        <div className="container mx-auto p-[10px]">
          {singleProduct ? (
            <div className="detailDiv rounded-[5px] sm:flex gap-[20px] lg:gap-[50px] xl:pl-[100px] lg:pl-[50px] md:pl-[35px] md:pr-[30px] items-center py-[30px] mt-[30px]">
              <div className="flex justify-center items-center">
                <img src={singleProduct.image} alt="" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-[25px] lg:text-[30px] font-bold leading-[23px] lg:leading-[28px] mt-[20px]">
                  {singleProduct.title}
                </h2>
                <div className="flex justify-center sm:justify-start text-[gold] mb-[10px]">
                  {ratings}
                </div>
                <div className="">${singleProduct.price} <del className="text-[#FB2E86]">${(singleProduct.price + singleProduct.price/100*5).toFixed(2)}</del></div>
                <div className="text-[#A9ACC6] lg:w-[80%]">
                  {singleProduct.description}
                </div>
                <button className="px-[15px] py-[6px] rounded-[5px] text-[14px] my-[20px] bg-[#FB2E86] text-white" onClick={() =>handleAddingProduct(singleProduct)}>
                  Add to cart <FaRegHeart className="inline-block" />
                </button>
                <div className="capitalize">
                  <span className="font-bold">Category:</span>{" "}
                  {singleProduct.category}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <section className="bg-[#F9F8FE]">
        <div className="container mx-auto p-[10px] mt-[50px] py-[50px]">
          <div className="flex justify-center sm:justify-start items-center gap-[30px]">
            <button
              onClick={() => handleTabClick("Description")}
              className={`pb-2 font-semibold ${
                activeTab === "Description"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => handleTabClick("Reviews")}
              className={`pb-2 font-semibold ${
                activeTab === "Reviews"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Reviews
            </button>
          </div>

          <div className="">
            {activeTab === "Description" ? (
              <div className="text-center sm:text-left sm:w-[400px] mt-[20px] text-[#A9ACC6]">
                {singleProduct.description}
              </div>
            ) : (
              <div className="">
                {singleProduct.reviews.map((item, i) => (
                  <div
                    className="flex justify-between sm:justify-start items-center mt-[20px]"
                    key={i}
                  >
                    <div className="sm:w-[400px]">
                      <div className="text-[17px] font-bold">
                        <FaPenNib className="text-pink-600 inline-block mr-[5px]" />
                        {item.Author}
                      </div>
                      <p className="text-[#A9ACC6]">
                        <FaCommentDots className="text-orange-600 inline-block mr-[5px]" />{" "}
                        {item.comment}
                      </p>
                    </div>
                    <div className="flex text-[gold] ml-[10px]">
                      {Array.from({ length: 5 }, (_, index) => {
                        return item.rating >= index + 1 ? (
                          <IoMdStar key={index} />
                        ) : item.rating >= index + 0.5 ? (
                          <IoMdStarHalf key={index} />
                        ) : (
                          <IoMdStarOutline key={index} />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
