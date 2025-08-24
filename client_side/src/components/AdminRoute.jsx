import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider.jsx";

const AdminRoute = ({ children }) => {
  const { userInfo } = useContext(AuthContext);

  return userInfo.isAdmin ? (
    children
  ) : (
    <div className="alert max-w-xl mx-auto mt-4">
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
        <span>Access Denied.</span>
      </div>
    </div>
  );
};

export default AdminRoute;
