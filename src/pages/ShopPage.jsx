import React, { useEffect, useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoCartOutline, IoGrid } from "react-icons/io5";
import { FaBars, FaListUl } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/productSlice";
import ShopCateReuse from "../reuse/ShopCateReuse";
import ShopReuse from "../reuse/ShopReuse";
import img from "/img5.png";
import { CiHeart } from "react-icons/ci";
import { GoZoomIn } from "react-icons/go";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Post from "../reuse/Post";
import Pegination from "../reuse/Pegination";

const ShopPage = () => {
  let allData = useSelector((state) => state.product.data);
  // console.log(allData);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the action when the component mounts
  }, [dispatch]);

  let [brand, setBrand] = useState(false);
  let [brandItem, setBrandItem] = useState([]);
  let [category, setCategory] = useState(false);
  let [categoryItem, setCategoryItem] = useState([]);
  let [price, setPrice] = useState(false);
  let [priceItem, setPriceItem] = useState([]);
  const handlePrice = () => {
    setPrice(!price);
  };

  useEffect(() => {
    setBrandItem([...new Set(allData.map((item) => item.Brand))]);
    setCategoryItem([...new Set(allData.map((item) => item.category))]);
  }, [allData]);
  // console.log(brandItem);


  let [filteredCategory, setFilteredCategory] = useState([])

  const handleBrandItem = (bItem) =>{
    let brandFiltering = allData.filter((item) => item.Brand === bItem);
    setFilteredCategory(brandFiltering);
    
  }
  const handleCategoryItem = (cItem) =>{
    let categoryFiltering = allData.filter((item) => item.category === cItem);
    setFilteredCategory(categoryFiltering);
  }

  const handlePriceItem = (value) => {
    const {low,high} = value;
    let priceFilter = allData.filter((item) =>item.price > low && item.price <= high)
    setFilteredCategory(priceFilter);
  };
  console.log(filteredCategory);
  

  let [show, setShow] = useState(false);
  const handleAccordion = () => {
    setShow(!show);
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [totalPost, setTotalPost] = useState(12);

  let endPost = totalPost * currentPage;
  let startPost = endPost - totalPost;
  let setPost = allData.slice(startPost, endPost);

  let pageNum = [];
  for (let i = 0; i < allData.length / totalPost; i++) {
    pageNum.push(i);
  }

  const paginate = (item) => {
    setCurrentPage(item + 1);
  };

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNum.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  const handleSelect = (e) =>{
    setTotalPost(e.target.value)
  }

  return (
    <>
      <HeadingReuse heading="Shop" toLink="/" toPage="Home" fromPage="Shop" />

      <section>
        <div className="container mx-auto p-[10px]">
          <div className="md:flex justify-between">
            <div className="mb-[30px] sm:mb-[20px]">
              <h2 className="leading-[17px] text-[#151875] font-bold text-[17px] lg:text-[20px]">
                Ecommerce Acceories & Fashion item{" "}
              </h2>
              <p className="text-[#8A8FB9] text-[14px] leading-[9px] md:leading-[15px] mb-[10px]">
                About {allData.length} results found
              </p>
            </div>
            <div className="sm:flex justify-between items-center mb-[30px] sm:mb-[25px] md:gap-[15px] lg:gap-[25px]">
              <div className="flex justify-between sm:gap-[130px] md:gap-[15px] lg:gap-[25px]">
                <div className="text-[#3F509E]">
                  Per Page:
                  <select className="border rounded-[3px] ml-[5px]" onChange={handleSelect}>
                    <option value="12">12</option>
                    <option value="6">6</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <div className="text-[#3F509E]">
                  Sort by:
                  <select className="border rounded-[3px] ml-[5px]">
                    <option value="">Brand</option>
                    <option value="">Category</option>
                    <option value="">Price</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center text-[#3F509E]">
                View:
                <div className="flex items-center ml-[10px] gap-[5px]">
                  <IoGrid /> <FaListUl />
                </div>
              </div>
            </div>
          </div>

          <div className="flex relative">
            <div className="sm:hidden" onClick={handleAccordion}>
              {show === true ? <RxCross1 /> : <FaBars />}
            </div>
            <div
              className={`${
                show === true
                  ? "left-0 duration-300"
                  : "left-[-300px] duration-300"
              } sm:w-[35%] md:w-[30%] lg:w-[22%] xl:w-[17%] z-10 absolute sm:static top-[25px] bg-[#e8e7e7] sm:bg-transparent p-[10px] rounded-[3px] left-0`}
            >
              <ShopCateReuse title="Product Brand">
                {brandItem.map((item) => (
                  <div className="" onClick={()=>handleBrandItem(item)}>
                    <ShopReuse item={item} />
                  </div>
                ))}
              </ShopCateReuse>
              <ShopCateReuse title="Category">
                {categoryItem.map((item) => (
                  <div className="" onClick={()=>handleCategoryItem(item)}>
                    <ShopReuse item={item} />
                  </div>
                ))}
              </ShopCateReuse>
              <div className="">
                <div
                  className="flex items-center underline text-[#151875] text-[18px] font-bold cursor-default"
                  onClick={handlePrice}
                >
                  Price Filter{" "}
                  {price === true ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </div>
                <div
                  className={`${
                    price === true ? "h-auto" : "h-0 overflow-hidden"
                  } cursor-pointer`}
                >
                  <div
                    className=""
                    onClick={() => handlePriceItem({ low: 0.0, high: 99.99 })}
                  >
                    0.00-99.99
                  </div>
                  <div
                    className=""
                    onClick={() => handlePriceItem({ low: 100.0, high: 499.99 })}
                  >
                    100.00-499.99
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:border-l sm:w-[65%] md:w-[70%] lg:w-[78%] xl:w-[83%]">
              <Post setPost={setPost} />
              <div className="">
                <Pegination
                  page={pageNum}
                  paginating={paginate}
                  prePage={prePage}
                  next={nextPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
