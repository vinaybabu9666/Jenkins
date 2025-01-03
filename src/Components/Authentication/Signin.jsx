import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <section id="visionpg">
      <div className="container">
        <header className="section-headerin heading">
          <h3>Signin</h3>
        </header>
      </div>
      <section id="servicesin">
        <div className="container">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <p className="bigtext">
                <strong>Please Login Here</strong>
              </p>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  id="name"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input type="submit" value="SIGNIN" className="btn" />
              </form>
              <br />
              <p>
                <a href="/signup">Don't have an account? Sign up</a>
              </p>
              <p>
                <a href="/forgot-password">Forgot Password?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signin;
