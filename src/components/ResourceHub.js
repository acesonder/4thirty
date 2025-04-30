import React, { useState } from 'react';

const ResourceHub = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', type: '', file: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResource({ ...newResource, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewResource({ ...newResource, file: e.target.files[0] });
  };

  const addResource = () => {
    setResources([...resources, newResource]);
    setNewResource({ name: '', type: '', file: null });
  };

  const deleteResource = (index) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
  };

  return (
    <div>
      <h2>Resource Hub</h2>
      <div>
        <input
          type="text"
          name="name"
          value={newResource.name}
          onChange={handleInputChange}
          placeholder="Resource Name"
        />
        <input
          type="text"
          name="type"
          value={newResource.type}
          onChange={handleInputChange}
          placeholder="Resource Type"
        />
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
        />
        <button onClick={addResource}>Add Resource</button>
      </div>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            {resource.name} ({resource.type})
            <button onClick={() => deleteResource(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceHub;
