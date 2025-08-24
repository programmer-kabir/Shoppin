import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import {
  addCart,
  addWishlist,
  getCart,
  getWishlist,
  removeWishlist,
} from "../utils/index.js";
import RelatedProducts from "../components/RelatedProducts.jsx";

const ViewProduct = () => {
  const product = useLoaderData();
  const [isWishlist, setWishlist] = useState(false);
  const [isCart, setCart] = useState(false);
  const { _id: id, category_id, name, price, seller, img, discount } = product;
  const [category, setCategory] = useState("");
  const [discountPrice, setDiscountPrice] = useState(null);

  const handleAddCart = (id, name) => {
    addCart(id, true);
    toast.success(name + " has been added to cart.");
    setCart(true);
  };

  const handleAddWishlist = (id, name) => {
    addWishlist(id);
    toast.success(name + " has been added to wishlist.");
    setWishlist(true);
  };

  const handleRemoveWishlist = (id, name) => {
    removeWishlist(id);
    toast.warn(name + " has been removed from wishlist.");
    setWishlist(false);
  };

  useEffect((_) => {
    discount ? setDiscountPrice(Math.round(price * 0.5)) : null;
  }, []);

  useEffect((_) => {
    id in getCart() ? setCart(true) : null;
    getWishlist().find((productId) => productId === id)
      ? setWishlist(true)
      : null;
  }, []);

  useEffect((_) => {
    fetch(`${import.meta.env.VITE_API_URL}/categories?id=${category_id}`)
      .then((response) => response.json())
      .then((result) => setCategory(result.name));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 max-w-sm sm:max-w-2xl mx-auto">
        <div className="card sm:card-side card-compact bg-sky-50 hover:bg-sky-200/60 transition-[background-color] duration-500">
          <figure className="relative sm:max-w-[15rem]">
            <img src={img} alt="" />
            {discount ? (
              <span className="absolute top-4 left-4 badge badge-primary">
                Sale
              </span>
            ) : null}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <span className="font-semibold">
              <span>Price: $</span>
              <span>
                {discountPrice ? (
                  <>
                    <span className="text-lg">{discountPrice}</span>
                    <span className="text-pink-600 line-through decoration-pink-600">
                      {price}
                    </span>
                  </>
                ) : (
                  price
                )}
              </span>
            </span>
            <span className="font-semibold">Category: {category}</span>
            <span className="font-semibold">Seller: {seller}</span>
            <div className="card-actions items-center mt-5">
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
                  onClick={(_) => handleAddCart(id, name)}
                >
                  Add to Cart
                </button>
              )}
              <span className="text-2xl">
                {isWishlist ? (
                  <span
                    className="hover:text-pink-600 cursor-pointer"
                    onClick={(_) => handleRemoveWishlist(id, name)}
                  >
                    <BsHeartFill />
                  </span>
                ) : (
                  <span
                    className="hover:text-pink-600 cursor-pointer"
                    onClick={(_) => handleAddWishlist(id, name)}
                  >
                    <BsHeart />
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts categoryId={category_id} productId={product["_id"]} />
    </>
  );
};

export default ViewProduct;
