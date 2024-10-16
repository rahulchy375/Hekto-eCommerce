import React, { Children, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const ShopCateReuse = ({ title, children }) => {
  let [show, setShow] = useState(false);
  const handleBrand = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="">
        <div
          className="flex items-center underline text-[#151875] text-[18px] font-bold overflow-hidden"
          onClick={handleBrand}
        >
          <div className="cursor-default">{title}</div>
          <div className="">
            {show === true ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </div>
        </div>
        <div
          className={`${show === true ? "h-auto" : "h-0 overflow-hidden"} `}
        >
            {children}
        </div>
      </div>
    </>
  );
};

export default ShopCateReuse;
