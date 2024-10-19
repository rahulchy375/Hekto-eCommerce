import React from "react";

const CheckoutReuse = ({place, w}) => {
  return (
    <>
      <div className={`border-b-2 pb-[10px] mb-[15px] mt-[20px] ${w}`}>
        <input
          type="text"
          placeholder={place}
          className="outline-none w-full bg-[#F8F8FD]"
          required
        />
      </div>
    </>
  );
};

export default CheckoutReuse;
