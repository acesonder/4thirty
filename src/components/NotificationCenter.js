import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({ message: '', priority: 'normal', type: 'general' });

  useEffect(() => {
    // Fetch initial notifications from an API or local storage
    const initialNotifications = [
      { message: 'Welcome to the Notification Center!', priority: 'normal', type: 'general' },
      { message: 'System maintenance scheduled for tomorrow.', priority: 'high', type: 'emergency' },
    ];
    setNotifications(initialNotifications);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification({ ...newNotification, [name]: value });
  };

  const addNotification = () => {
    setNotifications([...notifications, newNotification]);
    setNewNotification({ message: '', priority: 'normal', type: 'general' });
  };

  const deleteNotification = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  return (
    <div>
      <h2>Notification Center</h2>
      <div>
        <input
          type="text"
          name="message"
          value={newNotification.message}
          onChange={handleInputChange}
          placeholder="Notification Message"
        />
        <select
          name="priority"
          value={newNotification.priority}
          onChange={handleInputChange}
        >
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <select
          name="type"
          value={newNotification.type}
          onChange={handleInputChange}
        >
          <option value="general">General</option>
          <option value="emergency">Emergency</option>
        </select>
        <button onClick={addNotification}>Add Notification</button>
      </div>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.message} ({notification.priority}) - {notification.type}
            <button onClick={() => deleteNotification(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
