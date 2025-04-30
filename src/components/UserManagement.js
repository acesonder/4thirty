import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', approved: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '', role: '', approved: false });
  };

  const editUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
    setUsers(updatedUsers);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const approveUser = (index) => {
    const updatedUsers = users.map((user, i) => (i === index ? { ...user, approved: true } : user));
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email}) - {user.role} - {user.approved ? 'Approved' : 'Pending'}
            <button onClick={() => editUser(index, { ...user, name: 'Updated Name' })}>Edit</button>
            <button onClick={() => deleteUser(index)}>Delete</button>
            {!user.approved && <button onClick={() => approveUser(index)}>Approve</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
