import React from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { Rings } from "react-loader-spinner";

const Spinner = ({ children }) => {
  const location = useLocation();
  const { state } = useNavigation();

  return location.pathname.includes("dashboard") ? (
    children
  ) : state === "loading" ? (
    <Rings
      width="50"
      height="50"
      color="#35bef0"
      wrapperClass="justify-center mt-5"
    />
  ) : (
    children
  );
};

export default Spinner;
