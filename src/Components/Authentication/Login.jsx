import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth-service";
import HttpPost, { RedirectTo } from "../services/httpHelper";
import { AuthUrl } from "../utilities/api";
import { useNavigate } from "react-router-dom";
import '../Responsive.css';

function LogOn({ setIsLoggedIn }) {

  const initialData = {
    UserName: "",
    Password: "",
    ErrorMessage: "",
  };
  const [logondata, setLogonData] = useState(initialData);
  //const [profileImageUrl, setProfileImageUrl] = useState('');
  const navigate = useNavigate();


  // useEffect(()=>{
  //     AuthService.LogOut();
  // //window.elHelper.initValidation("#frmLogOn");
  //    },[])

  useEffect(() => {
    // Check if recent login flag exists
    if (localStorage.getItem("recentLogin")) {
      localStorage.removeItem("recentLogin");
      navigate("/", { replace: true }); // Navigate to home without adding a new entry
    }
    AuthService.LogOut();
  }, [navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    //if (window.elHelper.validateForm("#frmLogOn")) {
    var data = {
      userName: logondata.UserName,
      password: logondata.Password,
    };
    HttpPost({
      url: AuthUrl.LogOn,
      data: data,
      successCallBack: successCallBack,
      errorCallBack: errorCallBack,
    });
    // return false;
    //}
  };

  const onInputChange = (e) => {
    setLogonData({ ...logondata, [e.target.name]: e.target.value });
  };
  //#endregion

  //#region Methods
  const successCallBack = (result) => {
    if (result.token) {
      //AuthService.LogOn(result.Data.Token, result.Data);
      AuthService.LogOn(
        result.token,
        logondata.UserName,
        result.roleId,
        result.userId,
        result.profileImageUrl
      );
      setIsLoggedIn(true);
      localStorage.setItem("recentLogin", "true"); // Set recent login flag
      navigate("/", { replace: true }); // Navigate to home or default page after successful login
    } else {
      setLogonData({ ...logondata, ErrorMessage: "Login failed" });
    }
  };

  const errorCallBack = (error) => {
    setLogonData({ ...logondata, ErrorMessage: "Internal Server Error" });
  };

  return (
    <section id="visionpga">
      <div className="container">
        <header className="section-headerin heading">
          {/* <h3>Signin</h3> */}
        </header>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <section id="servicesin">
            <div className="container">
              <div className="col-md-12 wow fadeInUp">
                <div className="about-col">
                  <div className="d-flex flex-column flex-root">
                    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                      <div className="d-flex flex-column flex-lg-row-fluid py-10">
                        <div className="d-flex flex-center flex-column flex-column-fluid">
                          <div className="w-lg-500px p-10 p-lg-15 mx-auto">
                            <p className="bigtext">
                              <strong>Please Login Here</strong>
                            </p>
                            <form
                              className="form w-100"
                              onSubmit={onSubmit}
                              noValidate="novalidate"
                              id="frmLogOn"
                              action="#"
                            >
                              <div className="fv-row mb-5">
                                <label className="form-label fs-6 fw-bolder text-dark">
                                  Username
                                </label>
                                <input
                                  className="form-control form-control-lg form-control-solid  validate[required]"
                                  id="txtUserName"
                                  type="text"
                                  name="UserName"
                                  autoComplete="off"
                                  onChange={onInputChange}
                                  placeholder="Username"
                                />
                              </div>
                              <div className="fv-row">
                                <div className="d-flex flex-stack mb-2">
                                  <label className="form-label fw-bolder text-dark fs-6 mb-0">
                                    Password
                                  </label>
                                </div>
                                <input
                                  className="form-control form-control-lg form-control-solid validate[required]"
                                  id="txtPassword"
                                  type="password"
                                  name="Password"
                                  autoComplete="off"
                                  onChange={onInputChange}
                                  placeholder="Password"
                                />
                              </div>
                              <div className="text-center">
                                <span className="text-danger">
                                  {logondata.ErrorMessage}
                                </span>
                                <br />
                                <button
                                  type="submit"
                                  id="kt_sign_in_submit"
                                  className="btn btn-lg btn-primary fw-bolder me-3 my-2"
                                >
                                  <span className="indicator-label">
                                    Log In
                                  </span>
                                </button>
                                <br />
                                <span>
                                  <h4>
                                    Don't Have an Acount ? Please {""}
                                    <Link to="/register">Register {""}</Link>
                                    <span>Here</span>
                                  </h4>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default LogOn;
