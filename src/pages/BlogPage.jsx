import React, { useEffect, useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import { useDispatch, useSelector } from "react-redux";
import blogData from "../api/blog.json";
import { fetchBlogs } from "../slice/blogSlice";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaPenNib,
  FaTwitter,
} from "react-icons/fa";
import {
  MdDateRange,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import recent1 from "/images/recent1.png";
import recent2 from "/images/recent2.png";
import recent3 from "/images/recent3.png";
import recent4 from "/images/recent4.png";
import sale1 from "/images/sale1.png";
import sale2 from "/images/sale2.png";
import sale3 from "/images/sale3.png";
import offer from "/images/offer.png";

const BlogPage = () => {
  let [bar, setBar] = useState(false);
  let blogs = useSelector((state) => state.blog.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(blogData);

  let [page, setPage] = useState(1);
  let [totalPost, setTotalPost] = useState(2);

  let endPost = totalPost * page;
  let startPost = endPost - totalPost;

  let perPageBlog = blogs.slice(startPost, endPost);

  let pageNum = [];
  for (let i = 0; i < blogs.length / totalPost; i++) {
    pageNum.push(i);
  }
  const movingPages = (item) =>{
    setPage(item + 1);
  }

  const handleBar = () => {
    setBar(!bar);
  };
  const handlePrev = () =>{
    if (page > 1) {
      setPage((state)=>state -= 1);
    }
  }
  const handleNext = () =>{
    if (page < pageNum.length) {
      setPage((state)=>state += 1);
    }
  }
  

  return (
    <>
      <HeadingReuse heading="Blogs" toLink="/" toPage="Home" fromPage="Blog" />

      <section>
        <div className="container mx-auto p-[10px]">
          <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-[25px] lg:justify-center">
            <div className="order-2 sm:order-1 sm:w-[65%] lg:w-[55%] xl:w-[50%]">
              <div className="flex flex-col justify-center items-center sm:items-start">
                {perPageBlog.map((item, i) => (
                  <div
                    className="w-[270px] sm:w-full group mb-[30px] latestBlogs rounded-[5px]"
                    key={i}
                  >
                    <div className="">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full rounded-[5px]"
                      />
                    </div>
                    <div className="flex justify-between sm:justify-start sm:gap-[25px] p-[10px]">
                      <div className="flex items-center gap-[5px] mt-[7px] text-[#151875]">
                        <FaPenNib className="text-pink-600" /> {item.author}
                      </div>
                      <div className="flex items-center gap-[5px] mt-[7px] text-[#151875]">
                        {" "}
                        <MdDateRange className="text-orange-500" />
                        {item.date}
                      </div>
                    </div>
                    <div className="text-center sm:text-left  p-[10px] pt-0">
                      <h3 className="text-[17px] font-bold text-[#151875] mb-[10px] mt-[7px] group-hover:text-pink-600 duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#72718F]">{item.content}</p>
                      <button className="mt-[15px] mb-[10px] underline text-[#151875] group-hover:text-pink-600 duration-300 font-semibold">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="flex items-center justify-around">
                  <div className="hover:text-[#FF27B7] duration-300 lg:hidden hover:underline cursor-pointer select-none" onClick={handlePrev}>
                    <MdKeyboardArrowLeft className="inline-block" />
                    <MdKeyboardArrowLeft className="inline-block" />
                  </div>
                  <div className="hover:text-[#FF27B7] duration-300 hidden lg:block hover:underline cursor-pointer select-none" onClick={handlePrev}>
                    <MdKeyboardArrowLeft className="inline-block" /> Previous
                  </div>
                  <div className="flex md:gap-[5px] lg:gap-[15px]  select-none" >
                    {pageNum?.map((item, i) => (
                      <div className={`${page === item + 1 ? "bg-[#FF27B7] text-white" : ""} md:p-[15px] p-[12px] lg:p-[20px] w-[10px] h-[10px] flex justify-center items-center hover:bg-[#FF27B7] rounded-full hover:text-white duration-300 cursor-pointer`} onClick={()=>movingPages(item)} key={i}>
                        <button className="">{item + 1}</button>
                      </div>
                    ))}
                  </div>
                  <div className="hover:text-[#FF27B7] hidden lg:block duration-300 hover:underline cursor-pointer select-none" onClick={handleNext}>
                    Next <MdKeyboardArrowRight className="inline-block" />
                  </div>
                  <div className="hover:text-[#FF27B7] lg:hidden duration-300 hover:underline cursor-pointer select-none" onClick={handleNext}>
                    <MdKeyboardArrowRight className="inline-block" />
                    <MdKeyboardArrowRight className="inline-block" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 relative sm:order-2 sm:w-[45%] md:w-[40%] lg:w-[27%] xl:w-[22%]">
              <div
                className="inline-block mb-[20px] sm:hidden"
                onClick={handleBar}
              >
                {bar === true ? <RxCross2 /> : <FaBars />}
              </div>
              <div
                className={`${
                  bar === true
                    ? "left-0 duration-300"
                    : "left-[-370px] duration-300"
                } sm:w-full absolute sm:static top-[25px] bg-[#F6F7FB] sm:bg-transparent p-[10px] rounded-[3px] sm:pt-0 left-0`}
              >
                <div className="">
                  <h3 className="font-bold text-[#151875]">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      className="py-[2px] w-full outline-none px-[10px] rounded-[5px]"
                      placeholder="Search Post.."
                    />{" "}
                    <IoSearchOutline className="absolute top-[50%] translate-y-[-50%] right-[10px]" />
                  </div>

                  <div className="mt-[20px]">
                    <h3 className="font-bold mb-[10px] text-[#151875]">
                      Recent Post
                    </h3>
                    <div className="">
                      <img src={recent1} alt="" />
                      <img src={recent2} alt="" />
                      <img src={recent3} alt="" />
                      <img src={recent4} alt="" />
                    </div>
                  </div>

                  <div className="mt-[20px]">
                    <h3 className="font-bold mb-[10px] text-[#151875]">
                      Sales Post
                    </h3>
                    <div className="">
                      <img src={sale1} alt="" />
                      <img src={sale2} alt="" />
                      <img src={sale3} alt="" />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <h3 className="font-bold mb-[10px] text-[#151875]">
                      Sales Post
                    </h3>
                    <div className="">
                      <img src={offer} alt="" />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <h3 className="font-bold mb-[10px] text-[#151875]">
                      Follow
                    </h3>
                    <div className="flex gap-[15px]">
                      <div className="p-[5px] rounded-full bg-[#5625DF] text-white ">
                        <FaFacebook />
                      </div>
                      <div className="p-[5px] rounded-full bg-[#FF27B7] text-white ">
                        <FaInstagram />
                      </div>
                      <div className="p-[5px] rounded-full bg-[#37DAF3] text-white ">
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <h3 className="font-bold mb-[10px] text-[#151875]">Tags</h3>
                    <div className="text-[#151875] flex flex-wrap gap-[20px]">
                      <u className="hover:text-[#FF27B7] duration-300">
                        General
                      </u>
                      <u className="hover:text-[#FF27B7] duration-300">
                        Atsanil
                      </u>
                      <u className="hover:text-[#FF27B7] duration-300">
                        Insas.
                      </u>
                      <u className="hover:text-[#FF27B7] duration-300">
                        Bibsaas
                      </u>
                      <u className="hover:text-[#FF27B7] duration-300">Nulla</u>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
