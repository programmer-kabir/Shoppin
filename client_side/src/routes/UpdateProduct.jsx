import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id: id,
    category_id,
    name,
    seller,
    price,
    shipping,
    stock,
    featured,
    discount,
    img,
  } = product;
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState({
    name,
    seller,
    price,
    shipping,
    quantity: stock,
    featured,
    discount,
    iurl: img,
    category: category_id,
  });
  const [status, setStatus] = useState("");

  const changeInput = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const {
      name,
      seller,
      price,
      shipping,
      quantity,
      featured,
      discount,
      iurl,
      category,
    } = e.target;

    if (
      name.value === "" ||
      seller.value === "" ||
      price.value === "" ||
      shipping.value === "" ||
      quantity.value === "" ||
      iurl.value === ""
    ) {
      setStatus("All fields are required!");
      return false;
    } else if (
      isNaN(price.value) ||
      isNaN(shipping.value) ||
      isNaN(quantity.value)
    ) {
      setStatus("Field should be number!");
      return false;
    }

    fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        seller: seller.value,
        price: +price.value,
        shipping: +shipping.value,
        stock: +quantity.value,
        featured: featured.checked,
        discount: discount.checked,
        img: iurl.value,
        category_id: category.value,
      }),
    })
      .then((_) => setStatus("Product has been successfully updated!"))
      .catch((_) => setStatus("Something went wrong!"));
  };

  useEffect((_) => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.json())
      .then((result) => setCategories(result));
  }, []);

  return (
    <div>
      <form
        className="form-control grid grid-cols-2 gap-5 max-w-xl mx-auto"
        onSubmit={handleUpdateProduct}
      >
        {status ? (
          <span className="col-span-full text-xs font-medium text-[#35bef0]">
            {status}
          </span>
        ) : null}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          className="col-span-full input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <input
          type="text"
          placeholder="Seller"
          name="seller"
          value={input.seller}
          className="col-span-full input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={input.price}
          className="input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <input
          type="text"
          placeholder="Shipping Cost"
          name="shipping"
          value={input.shipping}
          className="input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={input.quantity}
          className="input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <div className="flex space-x-3">
          <label className="label w-fit p-0 gap-x-1 cursor-pointer">
            <span className="label-text">Featured</span>
            <input
              type="checkbox"
              name="featured"
              className="checkbox checkbox-sm"
              onChange={changeInput}
              checked={input.featured}
            />
          </label>
          <label className="label w-fit p-0 gap-x-1 cursor-pointer">
            <span className="label-text">Discount</span>
            <input
              type="checkbox"
              name="discount"
              className="checkbox checkbox-sm"
              onChange={changeInput}
              checked={input.discount}
            />
          </label>
        </div>
        <input
          type="text"
          placeholder="Image URL"
          name="iurl"
          value={input.iurl}
          className="input input-sm input-bordered focus:outline-0"
          onChange={changeInput}
        />
        <select
          name="category"
          className="select select-sm select-bordered focus:outline-0"
          onChange={changeInput}
        >
          {categories.map((category) => (
            <option
              key={category["_id"]}
              value={category["_id"]}
              selected={input.category === category["_id"] ? "selected" : null}
            >
              {category.name}
            </option>
          ))}
        </select>
        <div className="col-span-full text-center">
          <button
            type="submit"
            className="btn btn-sm min-w-[15rem] bg-[#35bef0] border-none rounded-lg normal-case"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
