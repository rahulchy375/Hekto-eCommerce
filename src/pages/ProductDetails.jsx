import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../api/product.json";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  let { id } = useParams();

  let [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    let product = productData.find((item) => item.id === parseInt(id));
    setSingleProduct(product);
  }, [id]);

//   console.log(singleProduct);

  return (
    <section>
      <div className="container mx-auto p-[10px]">
        {singleProduct ? (
          <div className="detailDiv rounded-[5px] sm:flex gap-[20px] lg:gap-[50px] xl:pl-[100px] lg:pl-[50px] md:pl-[35px] items-center py-[30px] mt-[30px]">
            <div className="flex justify-center items-center">
              <img src={singleProduct.image} alt="" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-[25px] font-bold leading-[15px] mt-[20px]">
                {singleProduct.title}
              </h2>
              <div className="">{singleProduct.rating}</div>
              <div className="">{singleProduct.price}</div>
              <div className="text-[#A9ACC6]">{singleProduct.description}</div>
              <button className="px-[15px] py-[6px] rounded-[5px] text-[14px] my-[20px] bg-[#FB2E86] text-white">
                Add to cart <FaRegHeart className="inline-block" />
              </button>
              <div className="">Category: {singleProduct.category}</div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
