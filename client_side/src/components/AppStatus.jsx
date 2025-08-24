import React, { useEffect, useState } from "react";
import imgNoItCt from "../assets/no-internet-connection.png";

const AppStatus = ({ children }) => {
  const [isOnline, setOnline] = useState(true);

  const handleOnlineStatus = (_) => setOnline(true);

  const handleOfflineStatus = (_) => setOnline(false);

  useEffect(() => {
    setOnline(typeof navigator.onLine === "boolean" ? navigator.onLine : true);

    addEventListener("online", handleOnlineStatus);
    addEventListener("offline", handleOfflineStatus);

    return () => {
      removeEventListener("online", handleOnlineStatus);
      removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return isOnline ? (
    children
  ) : (
    <section className="my-10">
      <div className="container">
        <div className="card bg-sky-50 max-w-sm mx-auto border border-sky-200">
          <figure>
            <img src={imgNoItCt} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Oops!</h2>
            <h4 className="font-medium">Internet Connection Lost</h4>
            <p className="text-gray-500">
              Make sure your device is connected to the WiFi or switch to mobile
              data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStatus;
