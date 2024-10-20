import React from "react";

const CheckoutReuse = ({place, w, value}) => {
  return (
    <>
      <div className={`border-b-2 pb-[10px] mb-[15px] mt-[20px] ${w}`}>
        <input
          value={value}
          type="text"
          placeholder={place}
          className="outline-none w-full bg-[#F8F8FD]"
          required
          readOnly
        />
      </div>
    </>
  );
};

export default CheckoutReuse;
