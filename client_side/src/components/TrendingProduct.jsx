import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IKContext, IKImage } from "imagekitio-react";
import { addCart, getCart } from "../utils/index.js";

const TrendingProduct = () => {
  const [trending, setTrending] = useState({});
  const [isCart, setCart] = useState(false);

  const handleAddCart = (id, name) => {
    addCart(id, true);
    toast.success(name + " has been added to cart.");
    setCart(true);
  };

  useEffect((_) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/products?id=6489a9b31a91e80fe752e220`
    )
      .then((response) => response.json())
      .then((result) => setTrending(result));
  }, []);

  useEffect(
    (_) => {
      trending["_id"] in getCart() ? setCart(true) : null;
    },
    [trending]
  );

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/khalidccnu">
      <section className="relative bg-sky-50 pt-8 pb-16 overflow-y-hidden">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
            <div className="max-w-sm mb-8 sm:mb-0" data-aos="fade-up">
              <IKImage
                path="/shoppin/3-stripes-backpack-2.0.png"
                className="w-full object-cover"
              />
            </div>
            <div className="sm:ml-5 space-y-3" data-aos="fade-up">
              <h3 className="text-3xl font-bold text-[#35bef0]">
                Unique & Trending Product
              </h3>
              <div className="text-gray-700">
                <h5>{trending.name}</h5>
                <span>Price: ${trending.price}</span>
              </div>
              {isCart ? (
                <button
                  type="button"
                  className="btn btn-sm px-5 border-none rounded normal-case"
                  disabled={true}
                >
                  Already added!
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case"
                  onClick={(_) => handleAddCart(trending["_id"], trending.name)}
                >
                  Add to Cart
                </button>
              )}
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    </IKContext>
  );
};

export default TrendingProduct;
