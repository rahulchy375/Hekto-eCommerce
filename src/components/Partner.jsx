import React from "react";
import partners from "/partners.png"
const Partner = () => {
  return (
    <div className="container mx-auto p-[10px] mb-[20px]">
      <div className="flex justify-center items-center">
        <img src={partners} alt="" />
      </div>
    </div>
  );
};

export default Partner;
