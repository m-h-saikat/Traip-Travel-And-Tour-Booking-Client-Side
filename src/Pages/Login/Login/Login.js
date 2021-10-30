import React from "react";
import {  useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import Logo from "../../../images/Logo.png";
import GoogleImage from "../../../images/Google Logo.png";
const Login = () => {
  const { signInUsingGoogle, user, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/Home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };

  return (
    <div className="Login-container ">
      <div className="row w-75 mx-auto">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5 mx-auto">
            <div className="card-body p-4 p-sm-5">
              <h4 className="card-title text-center mb-5 fw-light fs-5 ">
                <img src={Logo} width="100" height="100" alt="" /> <br />
                <b className="h3 text-danger">
                  Sign In Traip Travel And Tour Booking
                </b>
              </h4>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                    id="email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    for="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <p></p>
                  <button className="btn btn-primary" type="submit">
                    Sign in
                  </button>
                </div>

                <p>
                  or <br /> Login with
                </p>
                <div className=" mb-2"></div>
              </form>
              <button
                className="Google-Login-Button me-4"
                onClick={handleGoogleLogin}
              >
                <img src={GoogleImage} alt="" width="50" height="50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
