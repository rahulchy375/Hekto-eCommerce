import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import product from "../api/product.json";
import { addingProduct } from "../slice/productSlice";
import img1 from "/img1.png";
import Slider from "react-slick";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const Feature = () => {
  let allProduct = useSelector((state) => state.product.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(addingProduct(product));
  }, [dispatch]);

  // let [uniqueProduct, setUniqueProduct] = useState([]);

  // useEffect(() => {
  //   setUniqueProduct(
  //     ...new Set(Array.from([allProduct.map((item) => item.product)]))
  //   );
  // }, [allProduct]);

  // console.log(featuredProduct);
  // let [featuredProduct, setFeaturedProduct] = useState([]);
  // useEffect(() => {
  //   if (uniqueProduct.length > 0) {
  //     const filteringUniqueProduct = uniqueProduct.filter((item) =>
  //       item.includes("Featured")
  //     );
  //     setFeaturedProduct(filteringUniqueProduct);
  //   }
  // }, [uniqueProduct]);

  // console.log(featuredProduct);

  let [featuredProduct, setFeaturedProduct] = useState([]);
  useEffect(() => {
    if (allProduct.length > 0) {
      let filtering = allProduct.filter((item) =>
        item.product.includes("Featured")
      );
      setFeaturedProduct(filtering);
    }
  }, [allProduct]);
  console.log(featuredProduct);

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="featureSection">
      <div className="container mx-auto p-[10px]">
        <Slider {...settings}>
          {featuredProduct.map((item, i) => (
            <div className="" key={i}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feature;
