import React, { useEffect } from "react";
import AOS from "aos";
import HomeBanner from "../components/HomeBanner.jsx";
import HomeFeatured from "../components/HomeFeatured.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";
import HowOrderProcess from "../components/HowOrderProcess.jsx";
import Testimonial from "../components/Testimonial.jsx";
import DiscountProducts from "../components/DiscountProducts.jsx";
import Categories from "../components/Categories.jsx";

const Home = () => {
  useEffect((_) => {
    AOS.init({ offset: -40, anchorPlacement: "center-bottom", duration: 3000 });
  }, []);

  return (
    <>
      <HomeBanner />
      <HomeFeatured />
      <WhatShoppinOffers />
      <TrendingProduct />
      <HowOrderProcess />
      <Testimonial />
      <DiscountProducts />
      <Categories />
    </>
  );
};

export default Home;
