import { React, useState } from "react";
import "./../../style/Myfilestyle.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputemail, setEmailAddress] = useState("");
  const [inputpassword, setPassword] = useState("");
  const [checked] = useState(true);

  const openComponent = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();

    let userData = {
      username: inputemail,
      password: inputpassword,
      checked: checked,
    };

    console.log(userData);

    openComponent("/user/events");
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
