import React from "react";
import imgHomeDelivery from "../assets/home-delivery.png";
import imgPayment from "../assets/payment.png";
import imgSupport from "../assets/support.png";

const WhatShoppinOffers = () => {
  return (
    <section className="relative pt-16 pb-24 text-center overflow-hidden">
      <div className="container">
        <h3 className="font-bold text-2xl mb-10" data-aos="fade-up">
          What Shoppin Offers!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div
            className="card card-compact bg-sky-50 border border-sky-200 shadow-sm"
            data-aos="fade-right"
          >
            <figure>
              <img src={imgHomeDelivery} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Home Delivery</h2>
            </div>
          </div>
          <div
            className="card card-compact bg-sky-50 border border-sky-200 shadow-sm"
            data-aos="zoom-in"
          >
            <figure>
              <img src={imgPayment} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Cash on Delivery</h2>
            </div>
          </div>
          <div
            className="card card-compact bg-sky-50 border border-sky-200 shadow-sm"
            data-aos="fade-left"
          >
            <figure>
              <img src={imgSupport} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">24/7 Support</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-sky-50 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

export default WhatShoppinOffers;
