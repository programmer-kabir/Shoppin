import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { productCategories } from "../utils/index.js";
import Category from "./Category.jsx";

const Categories = () => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect((_) => {
    (async (_) => {
      const cate = await productCategories();
      setCategories(cate);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="pb-16 text-center overflow-y-hidden">
      <div className="container" data-aos="fade-up">
        <h3 className="font-bold text-2xl mb-10">Categories</h3>
        {!isLoading ? (
          <Swiper
            className="max-w-3xl px-5"
            slidesPerView="1"
            spaceBetween="50"
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category["_id"]} className="group">
                <Category key={category["_id"]} category={category} />
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

export default Categories;
