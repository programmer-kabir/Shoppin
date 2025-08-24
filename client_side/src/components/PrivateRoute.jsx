import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";

const PrivateRoute = ({ children }) => {
  const { loading, userInfo } = useContext(AuthContext);
  const location = useLocation();

  return !loading ? (
    userInfo?.uid ? (
      children
    ) : (
      <Navigate to="/login" state={{ fromURL: location }}></Navigate>
    )
  ) : null;
};

export default PrivateRoute;
