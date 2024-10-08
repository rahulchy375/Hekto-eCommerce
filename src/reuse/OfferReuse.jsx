import React from "react";

const OfferReuse = ({ img, title, para }) => {
  return (
    <>
      <div className="warranty w-[220px] rounded-[10px] mt-[25px] py-[15px] px-[10px]">
        <div className="flex justify-center items-center">{img}</div>
        <div className="text-center">
          <h3 className="text-[21px] font-bold mb-[10px] text-[#151875]">{title}</h3>
          <p className="text-[#1a0b5b59] text-[14px]">{para}</p>
        </div>
      </div>
    </>
  );
};

export default OfferReuse;
