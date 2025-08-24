import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaAngleLeft, FaHistory, FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
  const [hbMenu, setHbMenu] = useState(true);

  const handleResize = (_) => {
    if (innerWidth >= 768) setHbMenu(false);
    else setHbMenu(true);
  };

  useEffect(() => {
    handleResize();

    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  useEffect((_) => {
    sessionStorage.setItem("_vu", JSON.stringify(true));
  }, []);

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-[18rem_auto]">
        <div
          className={`fixed md:static ${
            hbMenu ? "-left-96" : "left-0"
          } top-0 w-72 md:w-auto h-full md:h-auto md:min-h-screen p-5 pt-10 md:-my-10 bg-gray-100 overflow-y-auto md:overflow-y-visible scrollbar-hide md:scrollbar-default z-50 md:z-10 transition-[left] duration-500`}
        >
          <FaAngleLeft
            className="md:hidden text-2xl mb-5 cursor-pointer"
            onClick={(_) => setHbMenu(true)}
          />
          <div className="md:sticky md:top-28">
            <div>
              <h5 className="font-semibold">Hello,</h5>
              <h3 className="font-bold text-xl">
                {userInfo.displayName || "Anonymous"}
              </h3>
            </div>
            <ul className="flex flex-col bg-gray-200 p-5 mt-5 rounded space-y-3">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    "flex px-2 py-1 leading-5 gap-1 rounded transition-colors duration-500 " +
                    (isActive
                      ? "bg-[#35bef0] text-white"
                      : "hover:bg-[#35bef0] hover:text-white")
                  }
                  end
                >
                  <MdDashboard />
                  <span>Overview</span>
                </NavLink>
              </li>
              {userInfo.isAdmin ? (
                <li>
                  <NavLink
                    to="/dashboard/products"
                    className={({ isActive }) =>
                      "flex px-2 py-1 leading-5 gap-1 rounded transition-colors duration-500 " +
                      (isActive
                        ? "bg-[#35bef0] text-white"
                        : "hover:bg-[#35bef0] hover:text-white")
                    }
                  >
                    <FaProductHunt />
                    <span>Products</span>
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/dashboard/order-history"
                    className={({ isActive }) =>
                      "flex px-2 py-1 leading-5 gap-1 rounded transition-colors duration-500 " +
                      (isActive
                        ? "bg-[#35bef0] text-white"
                        : "hover:bg-[#35bef0] hover:text-white")
                    }
                  >
                    <FaHistory />
                    <span>Order History</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="container">
          <CgMenuLeft
            className="md:hidden text-lg mb-5 cursor-pointer"
            onClick={(_) => setHbMenu(false)}
          />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
