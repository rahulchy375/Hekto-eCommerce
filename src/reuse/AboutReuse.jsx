import React from "react";

const AboutReuse = ({name,title,para,ref}) => {
  return (
    <>
      <div className="">
        <h3 className="text-[25px] font-semibold leading-[15px] mt-[30px]" ref={ref}>
          {name}
        </h3>
        <p className="text-[#8A8FB9] text-[14px] mb-[25px]">
          {title}
        </p>
        <p className="text-[#8A8FB9] font-semibold">
          {para}
        </p>
      </div>
    </>
  );
};

export default AboutReuse;
