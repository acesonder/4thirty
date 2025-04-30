import React, { useState } from 'react';

const CaseManagement = () => {
  const [cases, setCases] = useState([]);
  const [newCase, setNewCase] = useState({ name: '', status: '', assignedTo: '', escalationAlert: false, tasks: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCase({ ...newCase, [name]: value });
  };

  const addCase = () => {
    setCases([...cases, newCase]);
    setNewCase({ name: '', status: '', assignedTo: '', escalationAlert: false, tasks: [] });
  };

  const editCase = (index, updatedCase) => {
    const updatedCases = cases.map((caseItem, i) => (i === index ? updatedCase : caseItem));
    setCases(updatedCases);
  };

  const deleteCase = (index) => {
    const updatedCases = cases.filter((_, i) => i !== index);
    setCases(updatedCases);
  };

  const addTask = (index, task) => {
    const updatedCases = cases.map((caseItem, i) => {
      if (i === index) {
        return { ...caseItem, tasks: [...caseItem.tasks, task] };
      }
      return caseItem;
    });
    setCases(updatedCases);
  };

  const updateTaskProgress = (caseIndex, taskIndex, progress) => {
    const updatedCases = cases.map((caseItem, i) => {
      if (i === caseIndex) {
        const updatedTasks = caseItem.tasks.map((task, j) => (j === taskIndex ? { ...task, progress } : task));
        return { ...caseItem, tasks: updatedTasks };
      }
      return caseItem;
    });
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
            <div>
              <h4>Tasks</h4>
              <ul>
                {caseItem.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    {task.name} - Progress: {task.progress}
                    <button onClick={() => updateTaskProgress(index, taskIndex, 'In Progress')}>In Progress</button>
                    <button onClick={() => updateTaskProgress(index, taskIndex, 'Completed')}>Completed</button>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="New Task"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTask(index, { name: e.target.value, progress: 'Not Started' });
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseManagement;
