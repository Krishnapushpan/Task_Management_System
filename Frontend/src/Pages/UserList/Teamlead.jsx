import React, { useState } from 'react';
import './List.css';

const sampleTeamLeads = [
  {
    id: 1,
    fullName: 'David Chen',
    email: 'david.c@example.com',
    phone: '123-456-7890',
    position: 'Senior Frontend Lead',
    project: 'Project Alpha',
    teamSize: 5
  },
  {
    id: 2,
    fullName: 'Sophie Anderson',
    email: 'sophie.a@example.com',
    phone: '987-654-3210',
    position: 'Senior Backend Lead',
    project: 'Project Beta',
    teamSize: 4
  },
  {
    id: 3,
    fullName: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '555-123-4567',
    position: 'Design Team Lead',
    project: 'Project Gamma',
    teamSize: 3
  },
];

const Teamlead = () => {
  const [teamLeads, setTeamLeads] = useState(sampleTeamLeads);
  const [modalOpen, setModalOpen] = useState(false);
  const [editLead, setEditLead] = useState(null);

  const handleEdit = (id) => {
    const lead = teamLeads.find(l => l.id === id);
    setEditLead({ ...lead });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this team lead?')) {
      setTeamLeads(teamLeads.filter(lead => lead.id !== id));
    }
  };

  const handleModalChange = (e) => {
    setEditLead({ ...editLead, [e.target.name]: e.target.value });
  };

  const handleModalSave = () => {
    setTeamLeads(teamLeads.map(l => l.id === editLead.id ? editLead : l));
    setModalOpen(false);
    setEditLead(null);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    setEditLead(null);
  };

  return (
    <div className="client-list-wrapper">
      <div className="project-list-container">
        <div className="project-list-header">
          <h2 className="project-list-title">Team Leads</h2>
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
                <th>Team Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamLeads.map((lead, idx) => (
                <tr key={lead.id}>
                  <td>{idx + 1}</td>
                  <td>{lead.fullName}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.position}</td>
                  <td>{lead.project}</td>
                  <td>{lead.teamSize}</td>
                  <td>
                    <button className="client-edit-btn" onClick={() => handleEdit(lead.id)}>Edit</button>
                    <button className="client-delete-btn" onClick={() => handleDelete(lead.id)}>Delete</button>
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
            <h3>Edit Team Lead</h3>
            <label className="modal-label">Full Name:
              <input
                type="text"
                name="fullName"
                value={editLead.fullName}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Email:
              <input
                type="email"
                name="email"
                value={editLead.email}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Phone Number:
              <input
                type="text"
                name="phone"
                value={editLead.phone}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Position:
              <input
                type="text"
                name="position"
                value={editLead.position}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Project:
              <input
                type="text"
                name="project"
                value={editLead.project}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Team Size:
              <input
                type="number"
                name="teamSize"
                value={editLead.teamSize}
                onChange={handleModalChange}
                className="modal-input"
                min="1"
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

export default Teamlead;
