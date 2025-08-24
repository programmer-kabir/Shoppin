import React from "react";
import { useNavigate } from "react-router-dom";
import { IKContext, IKImage } from "imagekitio-react";
import imgDecHolder from "../assets/decorative-holder.png";

const HomeBanner = () => {
  const navigate = useNavigate();

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/khalidccnu">
      <section className="relative bg-sky-50">
        <div className="absolute top-0 left-16 hidden xl:block max-w-[7rem]">
          <img src={imgDecHolder} alt="" className="w-full" />
        </div>
        <div className="container">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-4xl mx-auto py-8">
            <div className="sm:mr-5 space-y-3">
              <h1 className="text-3xl font-bold text-[#35bef0]">
                Special offer in Eid 2023
              </h1>
              <p className="text-gray-700">
                It’s all about celebrating in style with Shoppin. Eid is a time
                for celebration and festivities, a time to come together with
                loved ones and make memories.
              </p>
              <button
                type="button"
                className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case"
                onClick={(_) => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
            <div className="max-w-sm mb-8 sm:mb-0">
              <IKImage
                path="/shoppin/kaptir-2.0-shoes.png"
                className="w-full object-cover"
                transformation={[{ q: "40" }]}
              />
            </div>
          </div>
        </div>
      </section>
    </IKContext>
  );
};

export default HomeBanner;
