import React, { useState, useEffect } from "react";
import Header from "./Header";
import { apiEndPoint } from "../utils/ApiService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const serviceUrl = apiEndPoint();
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState([]);
  const token = localStorage.getItem("userAuthToken");
  if (token === undefined || token === null) {
    localStorage.removeItem("userAuthToken");
    navigate("/login");
  }
  useEffect(() => {
    const fetchProfileInfo = async () => {
      const endpoint = serviceUrl + "user/profile";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          header_key: token,
        },
      };
      await fetch(endpoint, options)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 404) {
            alert("Session Expired, Login Again!");
            localStorage.removeItem("userAuthToken");
            navigate("/login");
          } else {
            alert(res.statusText);
          }
        })
        .then((data) => {
          if (data.success === true) {
            setProfileInfo(data.results);
          } else {
            alert(data.message);
          }
        });
    };
    fetchProfileInfo();
  }, []);

  return (
    <div className="container p-2">
      <Header activeMenu="Profile" />
      <h3 className="text-center mt-2">My Profile</h3>
      <hr />
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <img src="../logo192.png" class="rounded r-50" alt="..." />
        </div>
        <div className="col-md-8 col-lg-8">
          <table className="table">
            <tr>
              <th>Name : </th>
              <td>{profileInfo?.user_name}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
