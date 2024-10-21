import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Top = () => {
  let allData = useSelector((state) => state.product.data);
  // console.log(allData);

  let [topProduct, setTopProduct] = useState([]);
  useEffect(() => {
    if (allData.length > 0) {
      let filtering = allData.filter((item) => item.product.includes("top"));
      setTopProduct(filtering);
    }
  }, [allData]);
  // console.log(topProduct);

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
    <section id="topSection">
      <div className="container mx-auto p-[10px]">
        <div className="">
          <h2 className="text-center text-[27px] font-bold mt-[20px] mb-[10px]">
            Top Categories
          </h2>
          <Slider {...settings}>
            {topProduct.map((item,i) => (
              <div className="" key={i}>
                <div className="flex justify-center items-center flex-col mb-[20px] pt-[20px]">
                  <div className="relative h-[230px]  hover:bg-violet-700 w-[230px] group flex justify-center items-center rounded-full transition-all duration-300">
                    <div className="absolute group group-hover:translate-x-[5px] group-hover:translate-y-[-5px] bg-[#F6F7FB] flex justify-center items-center transition-all duration-300 h-[230px] w-[230px] rounded-full overflow-hidden ">
                      <img src={item.image} alt="" className="w-[70%]" />
                      <div className="absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[0px] group-hover:h-[50px]">
                        <div className="outline-none bg-[#08D15F] py-[5px] px-[10px]">
                          <Link to={`/shop/${item.id}`}>View Shop</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-[10px]">{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Top;
