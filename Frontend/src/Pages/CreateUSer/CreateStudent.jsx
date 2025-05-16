import React, { useState } from 'react';

const degreeOptions = [
  'B.Tech',
  'M.Tech',
  'BCA',
  'MCA',
  'B.Sc',
  'M.Sc',
];

const CreateStudent = () => {
  const [form, setForm] = useState({
    fullName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    fullname: '',
    degree: '',
    batch: '',
    year: '',
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
    <div className="student-form-container slide-in-right">
      {/* Form Section */}
      <div className="student-form-section">
        <h2 className="student-form-title">Student Registration Form</h2>
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
         
          <div className="student-form-gender-row">
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
          </div>
          {/* Existing fields */}
        
          <label className="student-form-label">Degree:
            <select
              name="degree"
              value={form.degree}
              onChange={handleChange}
              required
              className="student-form-input"
            >
              <option value="" disabled>Select degree</option>
              {degreeOptions.map((deg) => (
                <option key={deg} value={deg}>{deg}</option>
              ))}
            </select>
          </label>
          <label className="student-form-label">Batch:
            <input
              type="text"
              name="batch"
              value={form.batch}
              onChange={handleChange}
              placeholder="Enter batch (e.g. 2022-2026)"
              required
              className="student-form-input"
            />
          </label>
          <label className="student-form-label">Year:
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Enter year (e.g. 2)"
              min="1"
              max="6"
              required
              className="student-form-input"
            />
          </label>
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
      {/* Image Section */}
      <div className="student-form-image" />
      <div className="student-form-image-container"></div>
    </div>
  );
};

export default CreateStudent;