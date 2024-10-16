import React, { useState } from "react";

const ShopReuse = ({
  item,
  divChecked,
  divUnchecked,
  checkChecked,
  checkUnchecked,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div className="">
        <div className="flex items-center">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="hidden" // Hiding the actual checkbox
            />
            <span
              className={`w-[15px] h-[15px] mr-[5px] inline-block relative transition-colors duration-300 ease-in-out ${
                isChecked ? divChecked : divUnchecked
              }`}
            >
              <span
                className={`absolute left-[5px] top-[2px] w-[5px] h-[10px]  border-r-2 border-b-2 rotate-45 ${
                  isChecked ? checkChecked :  checkUnchecked
                }`}
              />
            </span>
            <div className="cursor-pointer text-[#7E81A2]">{item}</div>
          </label>
        </div>
      </div>
    </>
  );
};

export default ShopReuse;
