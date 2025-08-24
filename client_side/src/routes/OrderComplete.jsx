import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import imgClock from "../assets/clock.png";
import imgChecklist from "../assets/checklist.png";
import imgComplete from "../assets/complete.png";

const OrderComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromURL = location.state?.fromURL.pathname;

  return fromURL ? (
    <section className="py-10 text-center">
      <div className="container">
        <div className="max-w-lg mx-auto p-6">
          <div className="relative border-b-2 border-l-2 border-dotted p-8">
            <img
              src={imgClock}
              alt=""
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12"
            />
            <img src={imgComplete} alt="" className="w-12 mx-auto" />
            <h1 className="text-3xl font-bold text-[#35bef0] my-3">
              Your Order Is Completed!
            </h1>
            <p className="text-gray-700">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <button
              type="button"
              className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case mt-8"
              onClick={(_) => navigate("/shop")}
            >
              Continue Shopping
            </button>
            <img
              src={imgChecklist}
              alt=""
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-12"
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Navigate to="/checkout" />
  );
};

export default OrderComplete;
