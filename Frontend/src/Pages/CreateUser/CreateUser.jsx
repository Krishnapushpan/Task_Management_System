import React, { useState } from 'react';
import './User.css';
import UserRoleDropdown from '../../Components/Dropdowns/RoleDropdown';

const CreateUser = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    position: '',
    gender: '',
    password: '',
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
    setForm({ ...form, role, position: '' });
    setRoleDropdownVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setPasswordError('Minimum of 6 characters');
      return;
    }
    // Submit logic here
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="create-user-wrapper">
      <div className="create-user-container">
        <div className="create-user-form-section">
          <h2 className="create-user-title">Client Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="create-user-form-group">
              <label>Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </label>
            </div>
            <div className="create-user-form-group">
              <label>Email:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </label>
            </div>
            <div className="create-user-form-group">
              <label>Phone:
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </label>
            </div>
            <div className="create-user-form-group" style={{ position: 'relative' }}>
              <label>Role:
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onClick={() => setRoleDropdownVisible((v) => !v)}
                  placeholder="Select role"
                  readOnly
                  required
                  style={{ cursor: 'pointer', background: '#f9f9f9' }}
                />
              </label>
              <UserRoleDropdown visible={roleDropdownVisible} onItemClick={handleRoleSelect} />
            </div>
            {(form.role === 'Team Lead' || form.role === 'Team Member') && (
              <div className="create-user-form-group">
                <label>Position:
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Enter position"
                    required
                  />
                </label>
              </div>
            )}
            <div className="create-user-form-group">
              <label>Password:
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </label>
            </div>
            {passwordError && (
              <span className="student-form-error">{passwordError}</span>
            )}
            <button type="submit" className="create-user-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="create-user-image-section"></div>
      </div>
    </div>
  );
};

export default CreateUser;