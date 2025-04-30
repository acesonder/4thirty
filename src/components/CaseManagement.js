import React, { useState } from 'react';

const CaseManagement = () => {
  const [cases, setCases] = useState([]);
  const [newCase, setNewCase] = useState({ name: '', status: '', assignedTo: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCase({ ...newCase, [name]: value });
  };

  const addCase = () => {
    setCases([...cases, newCase]);
    setNewCase({ name: '', status: '', assignedTo: '' });
  };

  const editCase = (index, updatedCase) => {
    const updatedCases = cases.map((caseItem, i) => (i === index ? updatedCase : caseItem));
    setCases(updatedCases);
  };

  const deleteCase = (index) => {
    const updatedCases = cases.filter((_, i) => i !== index);
    setCases(updatedCases);
  };

  return (
    <div>
      <h2>Case Management</h2>
      <div>
        <input
          type="text"
          name="name"
          value={newCase.name}
          onChange={handleInputChange}
          placeholder="Case Name"
        />
        <input
          type="text"
          name="status"
          value={newCase.status}
          onChange={handleInputChange}
          placeholder="Status"
        />
        <input
          type="text"
          name="assignedTo"
          value={newCase.assignedTo}
          onChange={handleInputChange}
          placeholder="Assigned To"
        />
        <button onClick={addCase}>Add Case</button>
      </div>
      <ul>
        {cases.map((caseItem, index) => (
          <li key={index}>
            {caseItem.name} ({caseItem.status}) - Assigned to: {caseItem.assignedTo}
            <button onClick={() => editCase(index, { ...caseItem, name: 'Updated Case Name' })}>Edit</button>
            <button onClick={() => deleteCase(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseManagement;
