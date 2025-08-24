import React from "react";
import imgClifford from "../assets/clifford.jpeg";
import imgWalters from "../assets/walters.jpeg";
import imgHarmon from "../assets/harmon.jpeg";
import imgAbrams from "../assets/abrams.jpeg";
import imgKira from "../assets/kira.jpeg";

const Testimonial = () => {
  return (
    <section className={`pt-16 overflow-y-hidden`}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div
            className="lg:col-span-2 bg-sky-50 p-12 rounded-2xl"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2"
                src={imgClifford}
                alt=""
              />
              <div>
                <h1 className="font-semibold">Daniel Clifford</h1>
                <h2 className="text-xs font-medium text-gray-500">Doctor</h2>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              I'm blown away by the variety of products available on this
              website. Whether I'm looking for fashion, they've got it all. The
              quality of the items I've purchased is consistently impressive,
              and the prices are reasonable. This has become my go-to
              destination for online shopping.
            </p>
          </div>
          <div className="bg-sky-50 p-12 rounded-2xl" data-aos="fade-up">
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2"
                src={imgWalters}
                alt=""
              />
              <div>
                <h1 className="font-semibold">Jonathan Walters</h1>
                <h2 className="text-xs font-medium text-gray-500">
                  Businessman
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              Great online store! Found exactly what I needed, and the quick
              delivery was a pleasant surprise. Definitely my go-to for future
              shopping.
            </p>
          </div>
          <div
            className="lg:row-span-2 bg-sky-50 p-12 rounded-2xl"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2"
                src={imgHarmon}
                alt=""
              />
              <div>
                <h1 className="font-semibold">Jeanette Harmon</h1>
                <h2 className="text-xs font-medium text-gray-500">Engineer</h2>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              Exceptional shopping experience! Effortless navigation, detailed
              product insights. Swift, secure delivery surpassed expectations.
              Top-quality products that perform exceptionally. Outstanding
              customer service with prompt, accurate responses. A true eCommerce
              gem, making every purchase a delight with its commitment to
              excellence and customer satisfaction. Your go-to destination for
              seamless online shopping.
            </p>
          </div>
          <div className="bg-sky-50 p-12 rounded-2xl" data-aos="fade-up">
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2"
                src={imgAbrams}
                alt=""
              />
              <div>
                <h1 className="font-semibold">Patrick Abrams</h1>
                <h2 className="text-xs font-medium text-gray-500">Artist</h2>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              Effortless shopping, fast delivery, and quality products. A 5-star
              experience!
            </p>
          </div>
          <div
            className="lg:col-span-2 bg-sky-50 p-12 rounded-2xl"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2"
                src={imgKira}
                alt=""
              />
              <div>
                <h1 className="font-semibold">Kira Whittle</h1>
                <h2 className="text-xs font-medium text-gray-500">
                  Accountant
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              Amazing variety, easy browsing, and secure checkout. Ordered a
              product, got it swiftly, and it works like a charm. Impressed with
              the service and product quality. Will recommend!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
