import React, { useState } from 'react';
import { FiMail, FiLock, FiUser, FiPhone, FiUserCheck } from 'react-icons/fi';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: '',
    role: 'Client',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'password' && e.target.value.length > 0 && e.target.value.length < 6) {
      setPasswordError('Minimum of 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setPasswordError('Minimum of 6 characters');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    // Submit logic here
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        {/* Left Info Card */}
        <div className="login-info-card">
          <div className="login-info-title">TECHAUTH</div>
          <div className="login-info-heading">Create your client account</div>
          <div className="login-info-desc">
            Sign up to get started and connect with our platform as a client.
          </div>
          <div className="login-info-quote">
            <div>"The journey of a thousand miles begins with a single step."</div>
          </div>
        </div>
        {/* Right Signup Form */}
        <div className="login-form-section">
          <div className="login-form-title">Sign Up</div>
          <div className="login-form-subtitle">Fill in your details to create a client account.</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-wrapper">
              <FiUser className="login-input-icon" />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="login-input"
                required
              />
            </div>
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
              <FiPhone className="login-input-icon" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="login-input"
                required
              />
            </div>
            {/* <div className="student-form-gender-row" style={{marginBottom: 0}}>
              Gender:
              <label className="student-form-gender-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === 'Male'}
                  onChange={handleChange}
                  required
                  className="student-form-radio"
                />
                Male
              </label>
              <label className="student-form-gender-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === 'Female'}
                  onChange={handleChange}
                  required
                  className="student-form-radio"
                />
                Female
              </label>
            </div> */}
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
            <div className="login-input-wrapper">
              <FiLock className="login-input-icon" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="login-input"
                required
              />
            </div>
            <input type="hidden" name="role" value="Client" />
            {passwordError && (
              <span className="student-form-error">{passwordError}</span>
            )}
            <button type="submit" className="login-btn">Sign Up</button>
          </form>
          <div className="login-signup-row">
            <span>Already have an account?</span>
            <a href="/login" className="login-signup-link">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
