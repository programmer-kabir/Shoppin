import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
};

export default Shop;
