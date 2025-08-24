import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import { discountProducts } from "../utils/index.js";
import Product from "./Product.jsx";

const DiscountProducts = () => {
  const [isLoading, setLoading] = useState(true);
  const [discount, setDiscount] = useState([]);

  useEffect((_) => {
    (async (_) => {
      const products = await discountProducts();
      setDiscount(products);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="py-16 text-center overflow-x-hidden">
      <div className="container" data-aos="fade-left" data-aos-offset="-120">
        <h3 className="font-bold text-2xl mb-10">Discount Products</h3>
        {!isLoading ? (
          <Swiper
            className="max-w-4xl mx-auto"
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
            slidesPerView="1"
            spaceBetween="25"
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {discount.map((product) => (
              <SwiperSlide
                key={product["_id"]}
                className="group card card-compact bg-sky-50 hover:bg-sky-200/60 h-auto transition-[background-color] duration-500"
              >
                <Product key={product["_id"]} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Rings
            width="50"
            height="50"
            color="#35bef0"
            wrapperClass="justify-center"
          />
        )}
      </div>
    </section>
  );
};

export default DiscountProducts;
