import React from 'react';


const dropdownItems = [
  'Add User',
  'Add Client',
  'Add Teamlead',
  'Add Team Member',
  'Add Student',
];

const CreateDropdown = ({ visible, onItemClick }) => {
  if (!visible) return null;
  return (
    <ul className="sidebar-dropdown">
      {dropdownItems.map((item, idx) => (
        <li key={idx} className="sidebar-dropdown-item" onClick={() => onItemClick(item)}>{item}</li>
      ))}
    </ul>
  );
};

export default CreateDropdown;
