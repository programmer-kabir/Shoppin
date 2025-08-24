import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import { AuthContext } from "../providers/AuthProvider.jsx";

const DashboardOverview = () => {
  const { userInfo } = useContext(AuthContext);
  const [{ totalProducts }, { totalOrders }] = useLoaderData();
  const [anmEcommerce, setAnmEcommerce] = useState(null);
  const [orderProducts, setOrderProducts] = useState(0);

  useEffect((_) => {
    import(`../assets/ecommerce.json`).then((response) =>
      setAnmEcommerce(response.default)
    );
  }, []);

  useEffect((_) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/orders?count=true&id=${userInfo.uid}`
    )
      .then((response) => response.json())
      .then((result) => setOrderProducts(result));
  }, []);

  return (
    <>
      <div className="max-w-sm mx-auto mb-10">
        {anmEcommerce ? (
          <Lottie className="w-full" animationData={anmEcommerce} loop={true} />
        ) : null}
      </div>
      <div
        className={`grid grid-cols-1 max-w-sm mx-auto ${
          !userInfo.isAdmin ? "" : "sm:grid-cols-2 sm:max-w-none"
        } gap-5 text-center`}
      >
        {userInfo.isAdmin ? (
          <div className="card bg-sky-50">
            <div className="card-body">
              <h2 className="card-title justify-center">Products</h2>
              <p>{totalProducts}</p>
            </div>
          </div>
        ) : null}
        <div className="card bg-sky-50">
          <div className="card-body">
            <h2 className="card-title justify-center">Orders</h2>
            <p>{userInfo.isAdmin ? totalOrders : orderProducts.totalOrders}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
