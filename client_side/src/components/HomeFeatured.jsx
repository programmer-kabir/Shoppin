import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import imgCap from "../assets/cap.png";
import imgShoe from "../assets/shoe.png";

const HomeFeatured = () => {
  return (
    <section className={`pt-10 overflow-x-hidden`}>
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
          <div
            className={`flex items-center bg-sky-50 px-8 py-12 rounded-2xl`}
            data-aos="fade-left"
          >
            <div>
              <h3 className={`font-bold text-3xl`}>
                Big patterns are back in fashion
              </h3>
              <Link to="shop" className={`inline-flex gap-2 mt-5`}>
                <span>Shop Now</span>
                <AiOutlineArrowRight />
              </Link>
            </div>
            <figure className={`max-w-xs`}>
              <img src={imgCap} alt="" />
            </figure>
          </div>
          <div
            className={`flex items-center bg-sky-50 px-8 py-12 rounded-2xl`}
            data-aos="fade-left"
          >
            <div>
              <h3 className={`font-bold text-3xl`}>
                Show your fashion with shoes
              </h3>
              <Link to="shop" className={`inline-flex gap-2 mt-5`}>
                <span>Shop Now</span>
                <AiOutlineArrowRight />
              </Link>
            </div>
            <figure className={`max-w-xs`}>
              <img src={imgShoe} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
