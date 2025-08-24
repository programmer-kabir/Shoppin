import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import { FaAngleLeft } from "react-icons/fa";
import anmPageNotFound from "../assets/page-not-found.json";

const Error = () => {
  const { status, statusText } = useRouteError();
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <div className="container">
        <div className="card max-w-xs mx-auto">
          <figure className="relative">
            <Lottie animationData={anmPageNotFound} loop={true} />
            <button
              type="button"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 btn btn-xs px-5 bg-[#35bef0] border-none rounded normal-case"
              onClick={(_) => navigate(-1)}
            >
              <FaAngleLeft />
              <span>Back</span>
            </button>
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Oops!</h2>
            <span className="font-semibold">
              {status && statusText ? status + " " + statusText : null}
            </span>
            <span className="text-gray-500">An error has occurred!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
