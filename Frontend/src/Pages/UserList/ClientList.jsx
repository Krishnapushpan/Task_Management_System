import React, { useState } from 'react';
import './List.css';

const sampleClients = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    project: 'Project Alpha',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    project: 'Project Beta',
  },
  {
    id: 3,
    fullName: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '555-123-4567',
    project: 'Project Gamma',
  },
];

const ClientList = () => {
  const [clients, setClients] = useState(sampleClients);
  const [modalOpen, setModalOpen] = useState(false);
  const [editClient, setEditClient] = useState(null);

  const handleEdit = (id) => {
    const client = clients.find(c => c.id === id);
    setEditClient({ ...client });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  const handleModalChange = (e) => {
    setEditClient({ ...editClient, [e.target.name]: e.target.value });
  };

  const handleModalSave = () => {
    setClients(clients.map(c => c.id === editClient.id ? editClient : c));
    setModalOpen(false);
    setEditClient(null);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    setEditClient(null);
  };

  return (
    <div className="client-list-wrapper">
      <div className="project-list-container">
        <div className="project-list-header">
          <h2 className="project-list-title">Clients</h2>
        </div>
        <div className="table-responsive">
          <table className="project-list-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr key={client.id}>
                  <td>{idx + 1}</td>
                  <td>{client.fullName}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.project}</td>
                  <td>
                    <button className="client-edit-btn" onClick={() => handleEdit(client.id)}>Edit</button>
                    <button className="client-delete-btn" onClick={() => handleDelete(client.id)}>Delete</button>
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
            <h3>Edit Client</h3>
            <label className="modal-label">Full Name:
              <input
                type="text"
                name="fullName"
                value={editClient.fullName}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Email:
              <input
                type="email"
                name="email"
                value={editClient.email}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Phone Number:
              <input
                type="text"
                name="phone"
                value={editClient.phone}
                onChange={handleModalChange}
                className="modal-input"
              />
            </label>
            <label className="modal-label">Project:
              <input
                type="text"
                name="project"
                value={editClient.project}
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

export default ClientList;