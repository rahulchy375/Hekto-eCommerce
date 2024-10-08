import React from "react";
import freeDelivery from "/freeDelivery.png";
import cashback from "/cashback.png";
import customerService from "/customerService.png";
import quality from "/premium-quality.png";
import OfferReuse from "../reuse/OfferReuse";

const Offer = () => {
  return (
    <section id="offerSection">
      <div className="container mx-auto p-[10px] mb-[40px]">
        <h2 className="text-[25px] sm:text-[30px] font-bold text-center mt-[40px] text-[#151875]">
          What Shopex Offer!
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-[20px] xl:gap-[30px] justify-center items-center">
          <div className="sm:flex justify-center items-center gap-[20px] xl:gap-[30px]">
            <OfferReuse
              img={<img src={freeDelivery} alt="" />}
              title="Free Delivery"
              para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut doloremque necessi tatibus repellat nesciunt incidunt minus nulla, veritatis eveniet ipsam iusto."
            />
            <OfferReuse
              img={<img src={cashback} alt="" />}
              title="Cash Back"
              para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut doloremque necessi tatibus repellat nesciunt incidunt minus nulla, veritatis eveniet ipsam iusto."
            />
          </div>

          <div className="sm:flex justify-center items-center gap-[20px] xl:gap-[30px]">
            <OfferReuse
              img={<img src={quality} alt="" />}
              title="Premium Quality"
              para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut doloremque necessi tatibus repellat nesciunt incidunt minus nulla, veritatis eveniet ipsam iusto."
            />
            <OfferReuse
              img={<img src={customerService} alt="" />}
              title="24/7 Support"
              para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut doloremque necessi tatibus repellat nesciunt incidunt minus nulla, veritatis eveniet ipsam iusto."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
