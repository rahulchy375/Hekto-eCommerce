import React, { act, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import bg from "/bg.png";
import discountImg from "/discount.png";
import discountImg2 from "/img8.png"
import discountImg3 from "/img20.png"
import DiscountReuse from "../reuse/DiscountReuse";

const Discount = () => {
  let [isActive, setIsActive] = useState("");
  const handleActive = (active) => {
    setIsActive(active);
  };
  return (
    <section id="discountSection">
      <div className="container mx-auto p-[10px]">
        <h2 className="text-center text-[27px] sm:text-[30px] lg:text-[35px] font-bold text-[#151875]">
          Discount Item
        </h2>
        <ul className="flex justify-center items-center gap-[10px] cursor-default">
          <li
            onClick={() => handleActive("Wood Chair")}
            className={`text-[12px] sm:text-[16px] lg:text-[18px] text-[#151875] hover:text-pink-600 duration-300 ${
              isActive === "Wood Chair"
                ? "text-pink-600 underline"
                : "text-[#151875]"
            }`}
          >
            Wood Chair
          </li>
          <li
            onClick={() => handleActive("Plastic Chair")}
            className={`text-[12px] sm:text-[16px] lg:text-[18px] text-[#151875] hover:text-pink-600 duration-300 ${
              isActive === "Plastic Chair"
                ? "text-pink-600 underline"
                : "text-[#151875]"
            }`}
          >
            Plastic Chair
          </li>
          <li
            onClick={() => handleActive("Sofa Collection")}
            className={`text-[12px] sm:text-[16px] lg:text-[18px] text-[#151875] hover:text-pink-600 duration-300 ${
              isActive === "Sofa Collection"
                ? "text-pink-600 underline"
                : "text-[#151875]"
            }`}
          >
            Sofa Collection
          </li>
        </ul>

        {isActive === "Wood Chair" ? (
          <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        ):
      
        isActive === "Plastic Chair" ? (
          <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg2}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        ):
        isActive === "Sofa Collection" ? (
          <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg3}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        )
         :
         <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        }
        {/* {isActive === "Plastic Chair" && (
          <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg2}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        )}
        {isActive === "Sofa Collection" && (
          <DiscountReuse
            heading="20% Discount Of All Products"
            sub="Eams Sofa Compactv"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum."
            one="Material expose like metals"
            two="Simple neutral colours."
            three="Clear lines and geomatric figures"
            four="Material expose like metals"
            bg={<img src={bg} alt="" />}
            discountImg={
              <img
                src={discountImg3}
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            }
          />
        )} */}
      </div>
    </section>
  );
};

export default Discount;
