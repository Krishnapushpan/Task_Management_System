import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        {/* Left Info Card */}
        <div className="login-info-card">
          <div className="login-info-title">TECHAUTH</div>
          <div className="login-info-heading">We're here to help you level up.</div>
          <div className="login-info-desc">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className="login-info-quote">
            <div>There are many variations of passages of Lorem Ipsum available, but the majority in some form</div>
            {/* <div className="login-info-profile">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="login-info-avatar" />
              <div>
                <div className="login-info-name">Timson K</div>
                <div className="login-info-role">Freelancer</div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Right Login Form */}
        <div className="login-form-section">
          <div className="login-form-title">Sign In</div>
          <div className="login-form-subtitle">We are here to help you and we'd love to connect with you.</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-wrapper">
              <FiMail className="login-input-icon" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="login-input"
                required
              />
            </div>
            <div className="login-input-wrapper">
              <FiLock className="login-input-icon" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
          <div className="login-signup-row">
            <span>Don't have an account?</span>
            <a href="/signup" className="login-signup-link">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
