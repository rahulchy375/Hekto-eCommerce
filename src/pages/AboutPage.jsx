import React, { useEffect, useRef, useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import aboutImg from "/aboutImg.png";
import Offer from "../components/Offer";
import client1 from "/client1.png";
import client2 from "/client2.png";
import client3 from "/client3.png";
import Slider from "react-slick";
import AboutReuse from "../reuse/AboutReuse";

const AboutPage = () => {
  let [activeSlide, setActiveSlide] = useState(0);
  const jhonRef = useRef();
  const selinaRef = useRef();
  const sunnyRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    },
  };
  return (
    <>
      <HeadingReuse
        heading="About Us"
        toLink="/"
        toPage="Home"
        fromPage="About"
      />

      <section id="aboutPage">
        <div className="container mx-auto p-[10px]">
          <div className="flex justify-between lg:justify-center">
            <div className="hidden sm:block sm:w-[48%] mr-[20px]">
              <div className="lg:flex justify-end">
                <img src={aboutImg} alt="" className="lg:w-[70%] xl:w-[60%]"/>
              </div>
              
            </div>
            <div className="sm:w-[48%]">
              <h3 className="text-[#151875] font-bold text-[20px] mb-[15px]">
                Know About Our Ecomerce Business, History
              </h3>
              <p className="text-[#8A8FB9] mb-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className="sm:hidden">
                <img src={aboutImg} alt="" className=""/>
              </div>
              <button className="bg-[#FB2E86] text-white outline-none mt-[35px] sm:mt-[20px] rounded-[5px] px-[35px] py-[7px] mb-[20px]">
                Contact Us
              </button>
            </div>
          </div>
          <Offer />
        </div>
      </section>
      <section className="bg-[#FBFBFF] my-[30px]">
        <div className="container mx-auto p-[10px]">
          <div className="text-center py-[50px]">
            <h3 className="text-[#151875] font-bold text-[25px] mb-[15px]">
              Our Client Say!
            </h3>
            <div className="flex justify-center items-center gap-[10px]">
            <img
              src={client1}
              alt=""
              className={`${
                activeSlide === 0 ? "translate-y-[-10px]" : ""
              } transition-transform duration-300 rounded-[5px]`}
            />
            <img
              src={client2}
              alt=""
              className={`${
                activeSlide === 1 ? "translate-y-[-10px]" : ""
              } transition-transform duration-300 rounded-[5px]`}
            />
            <img
              src={client3}
              alt=""
              className={`${
                activeSlide === 2 ? "translate-y-[-10px]" : ""
              } transition-transform duration-300 rounded-[5px]`}
            />
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="mt-[20px]">
                  <h3
                    className="text-[25px] font-semibold leading-[15px] mt-[30px]"
                    ref={jhonRef}
                  >
                    Jhony Doe
                  </h3>
                  <p className="text-[#8A8FB9] text-[14px] mb-[25px]">
                    Ceo At Webecy Digital
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#8A8FB9] font-semibold sm:w-[70%] lg:w-[50%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                    vitae a enim nunc, sed sapien egestas ac nam. Tristique
                    ultrices dolor aliquam lacus volutpat praesent.
                  </p>
                  </div>
                  
                </div>
                <div className="mt-[20px]">
                  <h3
                    className="text-[25px] font-semibold leading-[15px] mt-[30px]"
                    ref={selinaRef}
                  >
                    Sunny Didi
                  </h3>
                  <p className="text-[#8A8FB9] text-[14px] mb-[25px]">
                    Ceo At Webecy Digital
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#8A8FB9] font-semibold sm:w-[70%] lg:w-[50%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                    vitae a enim nunc, sed sapien egestas ac nam. Tristique
                    ultrices dolor aliquam lacus volutpat praesent.
                  </p>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <h3
                    className="text-[25px] font-semibold leading-[15px] mt-[30px]"
                    ref={sunnyRef}
                  >
                    Jhon Dada
                  </h3>
                  <p className="text-[#8A8FB9] text-[14px] mb-[25px]">
                    Ceo At Webecy Digital
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-[#8A8FB9] font-semibold sm:w-[70%] lg:w-[50%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                    vitae a enim nunc, sed sapien egestas ac nam. Tristique
                    ultrices dolor aliquam lacus volutpat praesent.
                  </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
