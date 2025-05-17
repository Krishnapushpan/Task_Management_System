import React, { useState } from 'react';
import './List.css';

const sampleTeamMembers = [
  {
    id: 1,
    fullName: 'Alex Thompson',
    email: 'alex.t@example.com',
    phone: '123-456-7890',
    position: 'Frontend Developer',
    project: 'Project Alpha'
  },
  {
    id: 2,
    fullName: 'Emma Davis',
    email: 'emma.d@example.com',
    phone: '987-654-3210',
    position: 'Backend Developer',
    project: 'Project Beta'
  },
  {
    id: 3,
    fullName: 'Ryan Wilson',
    email: 'ryan.w@example.com',
    phone: '555-123-4567',
    position: 'UI/UX Designer',
    project: 'Project Gamma'
  },
];

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState(sampleTeamMembers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMember, setEditMember] = useState(null);

  const handleEdit = (id) => {
    const member = teamMembers.find(m => m.id === id);
    setEditMember({ ...member });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  const handleModalChange = (e) => {
    setEditMember({ ...editMember, [e.target.name]: e.target.value });
  };

  const handleModalSave = () => {
    setTeamMembers(teamMembers.map(m => m.id === editMember.id ? editMember : m));
    setModalOpen(false);
    setEditMember(null);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    setEditMember(null);
  };

  return (
    <div className="client-list-wrapper">
      <div className="project-list-container">
        <div className="project-list-header">
          <h2 className="project-list-title">Team Members</h2>
        </div>
        <div className="table-responsive">
          <table className="project-list-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Position</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, idx) => (
                <tr key={member.id}>
                  <td>{idx + 1}</td>
                  <td>{member.fullName}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.position}</td>
                  <td>{member.project}</td>
                  <td>
                    <button className="client-edit-btn" onClick={() => handleEdit(member.id)}>Edit</button>
                    <button className="client-delete-btn" onClick={() => handleDelete(member.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Team Member</h3>
            <label className="modal-label">Full Name:
              <input
                type="text"
                name="fullName"
                value={editMember.fullName}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Email:
              <input
                type="email"
                name="email"
                value={editMember.email}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Phone Number:
              <input
                type="text"
                name="phone"
                value={editMember.phone}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Position:
              <input
                type="text"
                name="position"
                value={editMember.position}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Project:
              <input
                type="text"
                name="project"
                value={editMember.project}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <div className="modal-actions">
              <button className="client-edit-btn" onClick={handleModalSave}>Save</button>
              <button className="client-delete-btn" onClick={handleModalCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
