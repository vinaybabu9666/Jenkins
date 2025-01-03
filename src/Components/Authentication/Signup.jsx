import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Signup successful');
      navigate('/signin');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <section id="visionpg">
      <div className="container">
        <header className="section-headerin heading">
          <h3>Signup</h3>
        </header>
      </div>
      <section id="servicesin">
        <div className="container">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <p className="bigtext">
                <strong>Signup Here</strong>
              </p>
              <form onSubmit={handleSignup}>
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
                <input
                  type="submit"
                  value="SIGNUP"
                  className="btn"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signup;
