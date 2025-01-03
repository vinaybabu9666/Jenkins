import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminUrl } from "../utilities/api";
import "../Responsive.css";

function Register() {
  const initialData = {
    UserName: "",
    Password: "",
    Email: "",
    RoleId: 2,
    DesignationId: 4,
    ProfileImage: null,
    ErrorMessage: "",
  };

  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFileChange = (e) => {
    setFormData({ ...formData, ProfileImage: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = AdminUrl.CreateUser;
    const method = "POST";

    // Create a FormData instance
    const formDataToSend = new FormData();
    formDataToSend.append("UserName", formData.UserName);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("RoleId", formData.RoleId);
    formDataToSend.append("DesignationId", formData.DesignationId);
    formDataToSend.append("Password", formData.Password);
    if (formData.ProfileImage) {
      formDataToSend.append("ProfileImage", formData.ProfileImage);
    }

    try {
      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (response) {
        navigate("/"); // Redirect to home or login page on successful registration
      }
    } catch (error) {
      setFormData({ ...formData, ErrorMessage: "Internal Server Error" });
    }
  };

  return (
    <section id="registration">
      <div className="container">
        <header className="section-header">{/* <h3>Register</h3> */}</header>
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
                                <strong>Please Register Here</strong>
                              </p>
                              <form
                                onSubmit={onSubmit}
                                encType="multipart/form-data"
                              >
                                <div className="form-group mb-3">
                                  <label htmlFor="UserName">Username</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="UserName"
                                    name="UserName"
                                    value={formData.UserName}
                                    onChange={onInputChange}
                                    required
                                  />
                                </div>
                                <div className="form-group mb-3">
                                  <label htmlFor="Password">Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    name="Password"
                                    value={formData.Password}
                                    onChange={onInputChange}
                                    required
                                  />
                                </div>
                                <div className="form-group mb-3">
                                  <label htmlFor="Email">Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={onInputChange}
                                    required
                                  />
                                </div>
                                <div className="form-group mb-3">
                                  <label htmlFor="ProfileImage">
                                    Profile Image
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="ProfileImage"
                                    name="ProfileImage"
                                    onChange={onFileChange}
                                  />
                                </div>
                                <div className="text-center">
                                  <span className="text-danger">
                                    {formData.ErrorMessage}
                                  </span>
                                  <br />
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Register
                                  </button>
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

export default Register;
