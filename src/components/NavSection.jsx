import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavSection = () => {
  let allData = useSelector((state) => state.product.data);
  let loginData = useSelector((state)=>state.login.value);
  let [bars, setBars] = useState(false);
  const handleBar = () => {
    setBars(!bars);
  };
  let navigate = useNavigate();
  let [searchProd, setSearchProd] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setSearchProd("");
    }
    let searching = allData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchProd(searching);
  };

  const handleSearchRemove = (id) =>{
    navigate(`/shop/${id}`)
    setSearchValue("")
    setSearchProd([])
  }
  console.log(searchProd);

  const handleContact = () =>{
    if (loginData) {
      navigate("/contact")
    } else{
      navigate("/login")
    }
  }

  return (
    <section id="navSection">
      <div className="container mx-auto p-[10px]">
        <div className="flex justify-between items-center relative">
          <div className="text-[21px] sm:text-[25px] font-bold">Hekto</div>
          <ul
            className={`${
              bars === true
                ? "top-[105px] right-[0px] duration-300"
                : "top-[105px] right-[-100px] duration-300"
            } fixed z-10 sm:static text-right text-[#F1F1F1] bg-[#b686f6] p-[10px] rounded-[5px] sm:flex sm:bg-transparent sm:text-black sm:font-semibold md:text-[18px]`}
          >
            <li className="mb-[5px] sm:mb-0 mr-[10px]">
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="mb-[5px] sm:mb-0 mr-[10px] group relative">
              Pages{" "}
              <div className="absolute w-[130px] sm:left-[50%] sm:translate-x-[-50%] sm:top-[70px] md:top-[77px] text-black top-[50%] translate-y-[-50%] left-[-130px] bg-[#f4f5f5] text-left group-hover:p-[10px] rounded-[7px] h-0 group-hover:h-auto overflow-hidden">
                <div>
                  {" "}
                  <Link to="/about">About us</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/faq">FAQs</Link>{" "}
                </div>
                <div>
                  {" "}
                  <Link to="/">My Account</Link>{" "}
                </div>
              </div>{" "}
            </li>
            <li className="mb-[5px] sm:mb-0 mr-[10px]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="mb-[5px] sm:mb-0 mr-[10px]">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="cursor-pointer" onClick={handleContact}>
              Contact
            </li>
          </ul>
          <div className="order-3 sm:hidden" onClick={handleBar}>
            {bars === true ? <VscChromeClose /> : <FaBars />}
          </div>
          <div className="order-2 flex justify-center items-center relative ">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search Product.."
              className="bg-slate-100 pl-[5px] rounded-[5px] sm:px-[15px] sm:py-[4px] outline-none lg:w-[250px]"
            />
            <div className="bg-[#FB2E86] py-[4px] px-[8px] sm:py-[8px] sm:px-[8px] absolute top-50 right-[-15px] translate-x-[-50%]">
              <FaSearch />
            </div>
          </div>
          <div className={` absolute left-[50%] sm:left-[56.5%] md:left-[63.8%] lg:left-[73%] xl:left-[78.5%] translate-x-[-50%] sm:translate-x-0 top-[41px] sm:top-[50px] bg-slate-100 z-10 w-[270px] 
            ${searchValue === "" ? "h-0" : "h-[100px] p-[10px]"}  overflow-y-scroll rounded-[5px]`}>
            {searchProd.map((item,i)=>(
              <div className="flex items-center gap-[10px] mb-[10px]" 
              onClick={() => handleSearchRemove(item.id)} key={i}>
                <div className="w-[50px]">
                  <img src={item.image} alt="" />
                </div>
                <div className="">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSection;
