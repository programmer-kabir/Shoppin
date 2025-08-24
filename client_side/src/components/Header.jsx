import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaHeart,
  FaPhoneAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Header = () => {
  const { loading, userInfo } = useContext(AuthContext);

  return (
    <header className="py-3 bg-purple-600 text-white text-xs">
      <div className="container">
        <div className="flex justify-end sm:justify-between">
          <div className="hidden sm:flex space-x-2">
            <Link
              to="mailto:shoppin@gmail.com"
              className="inline-flex space-x-0.5"
            >
              <FaEnvelope />
              <span>shoppin@gmail.com</span>
            </Link>
            <Link to="tel:+8801711223344" className="inline-flex space-x-0.5">
              <FaPhoneAlt />
              <span>01711-223344</span>
            </Link>
          </div>
          <div className="flex space-x-2">
            {!loading && !userInfo ? (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "inline-flex px-1 space-x-0.5" +
                  (isActive ? " border-b border-b-pink-600" : "")
                }
              >
                <span>Login</span>
                <FaUser />
              </NavLink>
            ) : null}
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                "inline-flex px-1 space-x-0.5" +
                (isActive ? " border-b border-b-pink-600" : "")
              }
            >
              <span>Wishlist</span>
              <FaHeart />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                "px-1" + (isActive ? " border-b border-b-pink-600" : "")
              }
            >
              <FaShoppingCart />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
