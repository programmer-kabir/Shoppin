import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimesCircle, FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Nav = () => {
  const { loading, userInfo, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [hbMenu, setHbMenu] = useState(true);
  const collapseHbMenu = useRef();

  const handleResize = (_) => {
    innerWidth >= 640 ? setHbMenu(false) : setHbMenu(true);
  };

  const handleCollapseHbMenu = ({ target: elem }) => {
    innerWidth < 640
      ? !collapseHbMenu.current.contains(elem) ||
        elem.classList.contains("nav-link")
        ? setHbMenu(true)
        : null
      : null;
  };

  const handleLogout = (_) =>
    logOut()
      .then((_) => sessionStorage.removeItem("_vu"))
      .then((_) => navigate("/login"));

  useEffect(() => {
    addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleCollapseHbMenu);

    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleCollapseHbMenu);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-gray-50 py-3 z-30" ref={collapseHbMenu}>
      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Shoppin</h3>
          <div className="relative flex items-center">
            <span
              className="sm:hidden hover:text-purple-600 cursor-pointer"
              onClick={(_) => setHbMenu(!hbMenu)}
            >
              {hbMenu ? (
                <FaBars className="h-6" />
              ) : (
                <FaTimesCircle className="h-6" />
              )}
            </span>
            <div
              className={`absolute sm:static top-14 right-0 bg-blue-100/70 sm:bg-transparent backdrop-blur sm:backdrop-blur-none w-[calc(100vw_-_2rem)] sm:w-auto rounded-lg shadow-sm sm:shadow-none ${
                hbMenu ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
              } overflow-hidden transition-[max-height,_opacity] duration-500`}
            >
              <ul className="flex flex-col sm:flex-row p-3 sm:p-0 sm:space-x-2 space-y-2 sm:space-y-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-link block hover:text-purple-600" +
                      (isActive ? " text-pink-600" : "")
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      "nav-link block hover:text-purple-600" +
                      (isActive ? " text-pink-600" : "")
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      "nav-link block hover:text-purple-600" +
                      (isActive ? " text-pink-600" : "")
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {!loading && userInfo ? (
              <div className="dropdown dropdown-end ml-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 border-2 border-dotted rounded-full">
                    {userInfo.photoURL ? (
                      <img src={userInfo.photoURL} alt="" />
                    ) : (
                      <span className="inline-flex items-center h-full text-xl">
                        <FaUser />
                      </span>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact mt-3 p-2 w-52 bg-base-200/50 backdrop-blur rounded-box shadow"
                >
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? "text-pink-600" : ""
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/settings"
                      className={({ isActive }) =>
                        isActive ? "text-pink-600" : ""
                      }
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <span onClick={handleLogout}>Logout</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
