import React, { useState } from 'react';

const SupportCommunication = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Support & Crisis Communication</h2>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupportCommunication;
