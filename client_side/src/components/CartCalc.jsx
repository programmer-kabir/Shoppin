import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCart, shoppingCartCalc } from "../utils/index.js";

const CartCalc = ({ setCartAction, cart }) => {
  const [cartCalc, setCartCalc] = useState({
    totalPrice: 0,
    totalShippingCharge: 0,
    grandTotal: 0,
  });
  const navigate = useNavigate();

  const handleClearCart = (_) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Cart will be empty.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35bef0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, empty it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Done!",
          showConfirmButton: false,
          timer: 1500,
        }).then((_) => {
          clearCart();
          setCartAction("cart empty");
        });
      }
    });
  };

  useEffect(
    (_) => {
      const calc = shoppingCartCalc(cart);
      setCartCalc({ ...calc });
    },
    [cart]
  );

  return (
    <div className="group card card-compact bg-sky-50 hover:bg-sky-200/60 p-5 transition-[background-color] duration-500">
      <div className="card-body">
        <h2 className="relative card-title justify-center text-lg after:content-[''] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-[3rem] after:h-0.5 after:bg-gray-500">
          Cart Total
        </h2>
        <div className="flex flex-col mt-5 space-y-2">
          <span className="font-semibold">
            Total Price: ${cartCalc.totalPrice}
          </span>
          <span className="font-semibold">
            Total Shipping Charge: ${cartCalc.totalShippingCharge}
          </span>
          <span className="font-semibold">
            Grand Total: ${cartCalc.grandTotal}
          </span>
        </div>
        <div className="card-actions mt-5">
          <button
            type="button"
            className="btn btn-sm btn-warning border-none rounded-2xl normal-case w-full"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button
            type="button"
            className="btn btn-sm bg-[#35bef0] border-none rounded-2xl normal-case w-full"
            onClick={(_) => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCalc;
