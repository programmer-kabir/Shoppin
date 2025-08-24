import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState({
    name: "",
    seller: "",
    price: "",
    shipping: "",
    quantity: "",
    featured: false,
    discount: false,
    iurl: "",
    category: "not set yet",
  });
  const [status, setStatus] = useState("");

  const changeInput = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddProduct = (e) => {
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
      iurl.value === "" ||
      category.value === "not set yet"
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

    fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
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
        ratings: 0,
        ratingsCount: 0,
        img: iurl.value,
        category_id: category.value,
      }),
    })
      .then((_) => {
        setStatus("Product has been successfully added!");
        setInput({
          name: "",
          seller: "",
          price: "",
          shipping: "",
          quantity: "",
          featured: false,
          discount: false,
          iurl: "",
          category: "not set yet",
        });
      })
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
        onSubmit={handleAddProduct}
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
          <option
            value="not set yet"
            selected={input.category === "not set yet" ? "selected" : null}
            disabled
          >
            Category
          </option>
          {categories.map((category) => (
            <option key={category["_id"]} value={category["_id"]}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="col-span-full text-center">
          <button
            type="submit"
            className="btn btn-sm min-w-[15rem] bg-[#35bef0] border-none rounded-lg normal-case"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
