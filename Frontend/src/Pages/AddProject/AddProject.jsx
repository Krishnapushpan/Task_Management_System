import React, { useState } from 'react';
import '../../form.css';

const durationOptions = [
  '30 days',
  '60 days',
  '90 days',
  '120 days',
];

const AddProject = () => {
  const [form, setForm] = useState({
    projectName: '',
    description: '',
    duration: '',
    budget: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="add-project-wrapper">
      <div className="add-project-container">
        <div className="add-project-form-section">
          <h1 className="add-project-title">Add Project</h1>
          <form onSubmit={handleSubmit}>
            <div className="add-project-form-group">
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={form.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                required
              />
            </div>
            <div className="add-project-form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Project Description"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="add-project-form-group">
              <label htmlFor="duration">Duration:</label>
              <select
                id="duration"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select duration</option>
                {durationOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="add-project-form-group">
              <label htmlFor="budget">Budget:</label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Budget (in USD)"
                min="0"
                required
              />
            </div>
            <button type="submit" className="add-project-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="add-project-image-section">
          {/* The image will be set via CSS background */}
        </div>
      </div>
    </div>
  );
};

export default AddProject;