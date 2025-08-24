import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Settings = () => {
  const { userInfo, updateUser } = useContext(AuthContext);
  const { uid, displayName, street, state, city, postal } = userInfo;
  const [input, setInput] = useState({
    name: displayName || "",
    password: "",
    address: street || "",
    state: state || "",
    city: city || "",
    postal: postal || "",
  });

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUser = (e) => {
    e.preventDefault();
    const { name, password, address, state, city, postal } = e.target;

    if (name.value === displayName) name.value = "";

    updateUser(
      uid,
      name.value,
      password.value,
      address.value,
      state.value,
      city.value,
      parseInt(postal.value)
    )
      .then((_) => toast.success("Profile has been updated!"))
      .catch((_) => toast.error("Something went wrong!"));
  };

  return (
    <section className="py-10">
      <div className="container">
        <form
          className="form-control max-w-sm sm:max-w-lg mx-auto space-y-8"
          onSubmit={handleUser}
        >
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={input.name}
              className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
              onChange={changeInput}
            />
            <input
              type="password"
              placeholder="Password (If unchanged, leave empty!)"
              name="password"
              value={input.password}
              className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
              onChange={changeInput}
            />
            <input
              type="text"
              placeholder="Street address"
              name="address"
              value={input.address}
              className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
              onChange={changeInput}
            />
            <div className="flex space-x-5">
              <input
                type="text"
                placeholder="State"
                name="state"
                value={input.state}
                className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                value={input.city}
                className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                onChange={changeInput}
              />
            </div>
            <div className="flex space-x-5">
              <input
                type="text"
                value="Bangladesh"
                className="input input-sm bg-transparent w-full px-0 border-0 border-b border-b-gray-300 rounded-none text-gray-500 input-disabled"
              />
              <input
                type="number"
                placeholder="Postal Code"
                name="postal"
                value={input.postal}
                className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                onChange={changeInput}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-sm bg-[#35bef0] border-none rounded normal-case w-full"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default Settings;
