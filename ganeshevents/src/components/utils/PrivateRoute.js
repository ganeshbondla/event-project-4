import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEndPoint } from "./ApiService";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const serviceUrl = apiEndPoint();
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("userAuthToken");
      const userkey = localStorage.getItem("userkey");
      if (
        token === undefined ||
        token === null ||
        userkey === undefined ||
        userkey === null
      ) {
        localStorage.removeItem("userAuthToken");
        localStorage.removeItem("userkey");
        navigate("/login");
      } else {
        const endpoint = serviceUrl + "user/auth/check";
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            header_key: token,
            userkey: userkey,
          },
        };
        await fetch(endpoint, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              navigate("/login");
            }
          })
          .then((data) => {
            if (data.success !== true) {
              alert(data.message);
              navigate("/login");
            }
            setIsLoading(false);
          });
      }
    };
    checkAuth();
  }, []);
  if (isLoading) {
    return <>Loading....</>;
  } else {
    return children;
  }
};

export default PrivateRoute;
