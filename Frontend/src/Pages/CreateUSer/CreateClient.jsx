import React, { useState } from 'react';
import UserRoleDropdown from '../../Components/Dropdowns/RoleDropdown';

const CreateClient = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [roleDropdownVisible, setRoleDropdownVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'password' && e.target.value.length > 0 && e.target.value.length < 6) {
      setPasswordError('Minimum of 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
    setRoleDropdownVisible(false);
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
    <div className="student-form-container slide-in-right">
      <div className="student-form-section">
        <h2 className="student-form-title">Client Registration Form</h2>
        <form onSubmit={handleSubmit} className="student-form">
          <label className="student-form-label">Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="student-form-input"
            />
          </label>
          <label className="student-form-label">Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="student-form-input"
            />
          </label>
          <label className="student-form-label">Phone:
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="student-form-input"
            />
          </label>
          <div style={{ position: 'relative' }}>
            <label className="student-form-label">Role:
              <input
                type="text"
                name="role"
                value={form.role}
                onClick={() => setRoleDropdownVisible((v) => !v)}
                placeholder="Select role"
                readOnly
                required
                className="student-form-input"
                style={{ cursor: 'pointer', background: '#f9f9f9' }}
              />
            </label>
            <UserRoleDropdown visible={roleDropdownVisible} onItemClick={handleRoleSelect} />
          </div>
          {/* <div className="student-form-gender-row">
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
          <div className="student-form-password-row">
            <label className="student-form-label student-form-password">Password:
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="student-form-input"
              />
            </label>
            <label className="student-form-label student-form-password">Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="student-form-input"
              />
            </label>
          </div>
          {passwordError && (
            <span className="student-form-error">{passwordError}</span>
          )}
          <button
            type="submit"
            className="student-form-submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="teammember-form-image" />
    </div>
  );
};

export default CreateClient;