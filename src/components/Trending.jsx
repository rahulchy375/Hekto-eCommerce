import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trending = () => {
  let allData = useSelector((state) => state.product.data);
  // console.log(allData);

  let [trendingProduct, setTrendingProduct] = useState([]);
  useEffect(() => {
    if (allData.length > 0) {
      let filtering = allData.filter((item) =>
        item.product.includes("trending")
      );
      setTrendingProduct(filtering);
    }
  }, [allData]);
  // console.log(trendingProduct);

  return (
    <section id="trendingSection">
      <div className="container mx-auto p-[10px]">
        <h2 className="text-center text-[28px] sm:text-[30px] mb-[15px] text-[#151875] font-bold mt-[35px]">
          Trending Product
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between items-center xl:justify-center xl:gap-[20px] ">
          {trendingProduct.map((item,i) => (
            <div className="trendingCard rounded-[6px] p-[10px] w-[80%] sm:w-[45%] md:w-[32%] lg:w-[20%] mb-[20px]" key={i}>
              <Link to={`/shop/${item.id}`}>
              
              <div className="flex justify-center items-center p-[20px] bg-[#F5F6F8] rounded-t-[6px]">
                <img
                  src={item.image}
                  alt=""
                  className="h-[170px] sm:h-[200px]"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[#151875] font-semibold mt-[10px]">{item.title}</h3>
                <p className="text-[#151875]">
                  ${item.price}{" "}
                  <span className="ml-[15px]">
                    <del>
                      ${(item.price + (item.price / 100) * 5).toFixed(2)}
                    </del>
                  </span>
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
