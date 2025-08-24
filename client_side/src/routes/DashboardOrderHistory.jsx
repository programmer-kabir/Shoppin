import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider.jsx";
import Pagination from "../components/Pagination.jsx";

const DashboardOrderHistory = () => {
  const { userInfo } = useContext(AuthContext);
  const [totalOrders, setTotalOrders] = useState(0);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(20);
  const pageCount = Math.ceil(totalOrders / ordersPerPage);

  useEffect((_) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/orders?count=true&id=${userInfo.uid}`
    )
      .then((response) => response.json())
      .then((result) => setTotalOrders(result.totalOrders));
  }, []);

  useEffect(
    (_) => {
      fetch(
        `${import.meta.env.VITE_API_URL}/orders?id=${
          userInfo.uid
        }&page=${currentPage}&limit=${ordersPerPage}`
      )
        .then((response) => response.json())
        .then((result) => setCurrentOrders(result));
    },
    [currentPage]
  );

  return (
    <div className="p-4">
      {totalOrders ? (
        <div className="overflow-x-auto border rounded-lg">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Id</th>
                <th>Total Price</th>
                <th>Total Shipping Charge</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => {
                return (
                  <tr>
                    <td>{order._id}</td>
                    <td>${order.totalPrice}</td>
                    <td>${order.totalShippingCharge}</td>
                    <td>${order.grandTotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert max-w-xl mx-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>You have not placed any orders yet.</span>
          </div>
        </div>
      )}
      {totalOrders > ordersPerPage ? (
        <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
      ) : null}
    </div>
  );
};

export default DashboardOrderHistory;
