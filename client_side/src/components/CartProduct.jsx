import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillCartDashFill } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addCart, removeCart } from "../utils/index.js";

const CartProduct = ({ setCartAction, product }) => {
  const navigate = useNavigate();
  const { _id: id, name, price, img, discount, quantity } = product;
  const [discountPrice, setDiscountPrice] = useState(null);

  const handleRemoveCart = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: name + " will be removed from cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35bef0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Removed!",
          showConfirmButton: false,
          timer: 1500,
        }).then((_) => {
          removeCart(id, true);
          setCartAction(id + " rem");
        });
      }
    });
  };

  const handleIncProduct = (id) => {
    addCart(id);
    setCartAction(id + " inc");
  };

  const handleDecProduct = (id, name) => {
    if (quantity > 1) {
      removeCart(id);
      setCartAction(id + " dec");
    } else {
      handleRemoveCart(id, name);
    }
  };

  useEffect((_) => {
    discount ? setDiscountPrice(Math.round(price * 0.5)) : null;
  }, []);

  return (
    <div className="group card lg:card-side card-compact bg-sky-50 hover:bg-sky-200/60 transition-[background-color] duration-500">
      <figure className="relative lg:max-w-[10rem]">
        <img src={img} alt="" />
        <span
          className="absolute top-4 left-4 w-fit h-fit opacity-0 group-hover:opacity-100 hover:text-pink-600 cursor-pointer transition-opacity duration-500"
          onClick={(_) => handleRemoveCart(id, name)}
        >
          <BsFillCartDashFill />
        </span>
        {discount ? (
          <span className="absolute top-4 right-4 badge badge-primary">
            Sale
          </span>
        ) : null}
      </figure>
      <div className="card-body gap-0">
        <h2
          className="card-title text-lg cursor-pointer w-fit"
          onClick={(_) => navigate("/shop/view-product/" + id)}
        >
          {name}
        </h2>
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
        <span className="font-semibold">
          <span>Total: $</span>
          {discountPrice ? discountPrice * quantity : price * quantity}
        </span>
        <div className="card-actions mt-3">
          <div className="btn-group">
            <button
              className="btn btn-xs btn-outline"
              onClick={(_) => handleDecProduct(id, name)}
            >
              <FaMinus />
            </button>
            <span className="btn btn-xs btn-outline bg-[#35bef0] border-x-[#35bef0] pointer-events-none">
              {quantity}
            </span>
            <button
              className="btn btn-xs btn-outline"
              onClick={(_) => handleIncProduct(id)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
