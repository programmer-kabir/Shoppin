import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowCircleRight, FaEdit, FaTrash } from "react-icons/fa";

const DashboardProduct = ({ action, setAction, product }) => {
  const navigate = useNavigate();
  const {
    _id: id,
    name,
    price,
    shipping,
    stock,
    category_id,
    discount,
    img,
  } = product;
  const [category, setCategory] = useState("");
  const [discountPrice, setDiscountPrice] = useState(null);

  const handleDeleteProduct = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: name + " will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35bef0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`, {
          method: "DELETE",
        }).then((_) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted!",
            showConfirmButton: false,
            timer: 1500,
          }).then((_) => setAction(!action));
        });
      }
    });
  };

  useEffect((_) => {
    discount ? setDiscountPrice(Math.round(price * 0.5)) : null;
  }, []);

  useEffect((_) => {
    fetch(`${import.meta.env.VITE_API_URL}/categories?id=${category_id}`)
      .then((response) => response.json())
      .then((result) => setCategory(result.name));
  }, []);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="mask mask-squircle w-5 h-5">
              <img src={img} alt="" />
            </div>
          </div>
          <span>{name}</span>
        </div>
      </td>
      <td>
        <span>$</span>
        {discountPrice ? (
          <>
            <span>{discountPrice}</span>
            <span className="text-xs text-pink-600 line-through decoration-pink-600">
              {price}
            </span>
          </>
        ) : (
          price
        )}
      </td>
      <td>${shipping}</td>
      <td>{stock}</td>
      <td>{category}</td>
      <td>
        <span className="inline-flex gap-x-1">
          <FaEdit
            className="hover:text-pink-600 cursor-pointer"
            onClick={(_) => navigate("/dashboard/products/update/" + id)}
          />
          <FaArrowCircleRight
            className="hover:text-pink-600 cursor-pointer"
            onClick={(_) => navigate("/shop/view-product/" + id)}
          />
          <FaTrash
            className="hover:text-pink-600 cursor-pointer"
            onClick={(_) => handleDeleteProduct(id, name)}
          />
        </span>
      </td>
    </tr>
  );
};

export default DashboardProduct;
