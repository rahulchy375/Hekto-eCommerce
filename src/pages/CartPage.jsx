import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import img from "/images/img7.png";
import { FaMinus } from "react-icons/fa";
import { TiDelete, TiMinus, TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import contactImg from "/images/ContactImg.png"
import {
  clearCart,
  decrement,
  increment,
  removeProduct,
} from "../slice/productSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  let cartProduct = useSelector((state) => state.product.cart);
  let [isChecked, setIsChecked] = useState(false);
  let dispatch = useDispatch();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  let { subTotal } = cartProduct.reduce(
    (acc, item) => {
      acc.subTotal += item.price * item.qan;
      return acc;
    },
    { subTotal: 0 }
  );

  return (
    <>
      <HeadingReuse
        heading="Cart Page"
        toLink="/"
        toPage="Home"
        fromPage="Cart"
      />

      <section>
        <div className="container mx-auto p-[10px]">
          <div className="sm:flex gap-[20px] xl:gap-[75px]">
            <div className="">
              <div className="flex text-[#1D3178] mb-[10px] font-bold">
                <div className="w-[38%] lg:w-[230px] xl:w-[350px]">Product</div>
                <div className="flex justify-between w-[72%] lg:w-[500px]">
                  <div className="">Price</div>
                  <div className="">Quantity</div>
                  <div className="">Total</div>
                </div>
              </div>

              {cartProduct.length > 0 ? 

              <div className="">
              {cartProduct.map((item, i) => (
                <div
                  className="flex items-center border-b pb-[5px] mb-[20px]"
                  key={i}
                >
                  <div className="flex items-center w-[38%] lg:w-[203px] xl:w-[370px]">
                    <div className="w-[40%] relative lg:w-[50px]">
                      <img src={item.image} alt="" />
                      <div
                        className="absolute top-[-7px] left-[-6px]"
                        onClick={() => dispatch(removeProduct(i))}
                      >
                        <TiDelete className="text-[18px]" />
                      </div>
                    </div>
                    <marquee className="w-[60%] lg:w-auto lg:hidden">
                      {item.title}
                    </marquee>
                    <div className="w-[60%] lg:w-auto hidden lg:block ml-[15px]">
                      {item.title}
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[72%]">
                    <div className="lg:ml-[29px]">${item.price}</div>
                    <div className="border leading-[0px] flex">
                      <button
                        className="border-r px-[5px] pb-[5px]"
                        onClick={() => dispatch(decrement(i))}
                      >
                        {" "}
                        <TiMinus />{" "}
                      </button>{" "}
                      <div className="px-[7px] flex cursor-default justify-center items-center">
                        {item.qan}
                      </div>{" "}
                      <button
                        className="border-l px-[5px] font-bold py-[5px]"
                        onClick={() => dispatch(increment(i))}
                      >
                        <TiPlus />
                      </button>
                    </div>
                    <div className="">
                      ${(item.price * item.qan).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
              </div>
              : <div className="">
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center mt-[30px] sm:w-[350px] md:w-[450px]">
                  <img src={contactImg} alt="" className="w-[80%] sm:w-auto"/>
                </div>
                </div>
                
                <div className="text-[30px] md:text-[50px] text-slate-200 font-bold text-center mt-[30px]">No Product Here</div>
              </div>
              
              }

              <div className="flex justify-center sm:justify-end items-center mt-[20px]">
                {cartProduct.length > 0 && (
                  <button
                    onClick={() =>
                      dispatch(clearCart(cartProduct.map((i) => i)))
                    }
                    className="bg-[#FB2E86] rounded-[5px] text-white px-[20px] py-[5px]"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            </div>
            <div className="sm:w-[290px] md:w-[300px]">
              <div className="mt-[50px] sm:mt-[0px]">
                <h3 className="text-[#1D3178] font-bold text-center">
                  Cart Totals
                </h3>
                <div className="bg-[#F4F4FC] rounded-[5px] mt-[15px] p-[15px] text-center">
                  <div className="border-b-2 mb-[30px] pb-[10px]">
                    <div className=" flex justify-between">
                      <div className="">Subtotal:</div>
                      <div className="">${subTotal.toFixed(2)}</div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="">Vat:</div>
                      <div className="">5%</div>{" "}
                    </div>
                  </div>

                  <div className="border-b-2 pb-[10px] flex justify-between">
                    <div className="">Total:</div>
                    <div className="">
                      ${(subTotal + (subTotal / 100) * 5).toFixed(2)}
                    </div>{" "}
                  </div>

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
                        Shipping & taxes calculated at checkout
                      </div>
                    </label>
                  </div>

                  <button className="mt-[20px] outline-none bg-[#19D16F] text-white w-full py-[7px] rounded-[5px]">
                    <Link to="/checkout">Proceed To Checkout</Link>
                    
                  </button>
                </div>
              </div>
              <div className="mt-[25px]">
                <h3 className="text-[#1D3178] mb-[15px] font-bold text-center">
                  Calculate Shopping
                </h3>
                <div className="bg-[#F4F4FC] rounded-[5px] p-[15px] pt-[30px]">
                  <div className="border-b-2 pb-[10px] mb-[30px]">
                    <input
                      type="text"
                      placeholder="Bangladesh"
                      className="bg-[#F4F4FC] outline-none w-full"
                    />
                  </div>
                  <div className="border-b-2 pb-[10px] mb-[30px]">
                    <input
                      type="text"
                      placeholder="Chattogram"
                      className="bg-[#F4F4FC] outline-none w-full"
                    />
                  </div>
                  <div className="border-b-2 pb-[10px] mb-[30px]">
                    <input
                      type="text"
                      placeholder="Post Code"
                      className="bg-[#F4F4FC] outline-none w-full"
                    />
                  </div>
                  <button className="bg-[#FB2E86] text-white w-full py-[7px] rounded-[5px] outline-none">
                    Calculate Shipping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
