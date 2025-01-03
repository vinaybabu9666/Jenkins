import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (username === 'admin') {
      alert(`Password reset successful. Your new password is ${newPassword}`);
      navigate('/login');
    } else {
      alert('Username not found');
    }
  };

  return (
    <section id="visionpg">
      <div className="container">
        <header className="section-headerin heading">
          <h3>Forgot Password</h3>
        </header>
      </div>
      <section id="servicesin">
        <div className="container">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <p className="bigtext">
                <strong>Reset Your Password</strong>
              </p>
              <form onSubmit={handleForgotPassword}>
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
                  name="newPassword"
                  className="form-control"
                  required
                  id="newPassword"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <br />
                <input
                  type="submit"
                  value="RESET PASSWORD"
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

export default ForgotPassword;
