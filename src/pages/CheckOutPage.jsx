import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import CheckoutReuse from "../reuse/CheckoutReuse";
import { useSelector } from "react-redux";

const CheckOutPage = () => {
  let cartProduct = useSelector((state) => state.product.cart);
  let userData = useSelector((state) => state.user.value);

  let [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  let {subTotal} = cartProduct.reduce((acc, item)=>{
    acc.subTotal += item.price * item.qan;
    return acc;
  },
  {subTotal:0}
)

  return (
    <>
      <HeadingReuse
        heading="Checkout Page"
        toLink="/"
        toPage="Home"
        fromPage="Checkout"
      />

      <section>
        <div className="container mx-auto p-[10px] sm:flex justify-between">
          <div className="bg-[#F8F8FD] px-[10px] lg:px-[25px] py-[20px] mt-[30px] sm:w-[52%] md:w-[60%] lg:w-[65%] xl:w-[70%] h-[570px] md:h-[510px] rounded-[5px]">
            <div className="mb-[30px]">
              <h2 className="text-[#1D3178] text-[25px] font-bold">
                Contact Information
              </h2>
              <CheckoutReuse place="Email or mobile phone number" value={userData.email}/>
              <div className="flex items-center mt-[10px]">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="hidden" // Hiding the actual checkbox
                  />
                  <span
                    className={`w-[15px] h-[15px] mr-[5px] inline-block relative transition-colors duration-300 ease-in-out rounded-[5px] ${
                      isChecked ? "bg-[#54ff3e]" : "bg-[#d8f9d8]"
                    }`}
                  >
                    <span
                      className={`absolute left-[5px] top-[2px] w-[5px] h-[10px]  border-r-2 border-b-2 rotate-45 ${
                        isChecked ? "border-white" : "border-[#54ff3e]"
                      }`}
                    />
                  </span>
                  <div className="cursor-pointer text-[10px] text-left text-[#7E81A2]">
                    Keep me up to date on news and exclusive offers
                  </div>
                </label>
              </div>
            </div>

            <div className="">
              <h2 className="text-[#1D3178] text-[25px] font-bold">
                Shipping Address
              </h2>
              <div className="">
                <div className="md:flex justify-between">
                  <CheckoutReuse place="First Name" w="md:w-[48%]" value= {userData.firstName}/>
                  <CheckoutReuse place="Last Name" w="md:w-[48%]" value= {userData.lastName}/>
                </div>
                <CheckoutReuse place="Address" value={userData.street}/>
                <CheckoutReuse place="City" value={userData.city}/>
                <div className="md:flex gap-[25px]">
                  <CheckoutReuse place="Country" w="md:w-[50%]" value={userData.country}/>
                  <CheckoutReuse place="Post Code" w="md:w-[50%]" value={userData.postCode}/>
                </div>
              </div>
              
            </div>
          </div>

          <div className="">
            {cartProduct.map((item,i)=>(
            <div className="flex justify-between items-center border-b mt-[30px] pb-[10px]" key={i}>
              <div className="flex items-center">
                <div className="w-[50px] mr-[10px] bg-slate-100 p-[5px] rounded-[5px]">
                  <img src={item.image} alt="" />
                </div>
                <div className="">{item.title}</div>
              </div>
              <div className="ml-[20px]">${item.price}</div>
            </div>
            ))}
            <div className="bg-[#F8F8FD] rounded-[5px] my-[30px] px-[15px] py-[25px]">
              <div className="border-b-2 pb-[10px]">
                <div className="flex justify-between">
                  <div className="">Subtotal:</div>
                  <div className="">${subTotal.toFixed(2)}</div>
                </div>
                <div className="flex justify-between mt-[10px]">
                  <div className="">Vat:</div>
                  <div className="">5%</div>
                </div>
              </div>
              <div className="flex justify-between border-b-2 mt-[20px] pb-[10px]">
                <div className="">Total:</div>
                <div className="">${Math.floor((subTotal + subTotal/100*5)).toFixed(2)}</div>
              </div>
                <button className="w-full mt-[40px] py-[6px] bg-[#FB2E86] rounded-[5px] text-white">Payment</button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;