import { React, useState } from "react";
import "./../../style/Myfilestyle.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { apiEndPoint } from "../utils/ApiService";

const Login = () => {
  const serviceUrl = apiEndPoint();
  const [inputemail, setEmailAddress] = useState("");
  const [inputpassword, setPassword] = useState("");

  const openComponent = useNavigate();

  const proceedLogin = async (e) => {
    e.preventDefault();

    let userData = {
      username: inputemail,
      password: inputpassword,
    };

    const endpoint = serviceUrl + "user/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    await fetch(endpoint, options)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert(res.statusText);
        }
      })
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("userAuthToken", data.token);
          localStorage.setItem("userkey", data.userkey);
          openComponent("/user/events");
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <>
      <div className="container p-2">
        <Header activeMenu="Home" />
        <div className="text-center mt-3">
          <h2>Ganesh Events - Login</h2>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-lg-4"></div>
          <div className="col-md-4 col-lg-4">
            <form onSubmit={proceedLogin}>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-block btn-primary">
                Get Me In
              </button>
            </form>
            <div className="mt-3">
              <small>
                Dont have account, <Link to="#">CLICK HERE</Link> to Register
              </small>
            </div>
          </div>
          <div className="col-md-4 col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
