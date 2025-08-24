import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Spinner from "../components/Spinner.jsx";
import Footer from "../components/Footer.jsx";

const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <Spinner>
        <Outlet />
      </Spinner>
      <Footer />
      <ToastContainer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
