import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import DashboardProduct from "../components/DashboardProduct.jsx";
import Pagination from "../components/Pagination.jsx";

const DashboardProductsRoot = () => {
  const navigate = useNavigate();
  const [_, { totalProducts }] = useLoaderData();
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [pageCount] = useState(Math.ceil(totalProducts / productsPerPage));
  const [action, setAction] = useState(false);

  useEffect(
    (_) => {
      fetch(
        `${
          import.meta.env.VITE_API_URL
        }/products?page=${currentPage}&limit=${productsPerPage}`
      )
        .then((response) => response.json())
        .then((result) => setCurrentProducts(result));
    },
    [currentPage, action]
  );

  return (
    <div>
      <div className="text-end mb-3">
        <button
          type="button"
          className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case space-x-1"
          onClick={(_) => navigate("/dashboard/products/add")}
        >
          <FaPlusCircle />
          <span>Add Product</span>
        </button>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Shipping</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <DashboardProduct
                key={product["_id"]}
                action={action}
                setAction={setAction}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
};

export default DashboardProductsRoot;
