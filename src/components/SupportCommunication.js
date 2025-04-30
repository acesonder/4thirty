import React, { useState } from 'react';

const SupportCommunication = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [audioMessages, setAudioMessages] = useState([]);
  const [crisisContacts, setCrisisContacts] = useState([]);
  const [faq, setFaq] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  const handleAudioMessage = (audio) => {
    setAudioMessages([...audioMessages, audio]);
  };

  const addCrisisContact = (contact) => {
    setCrisisContacts([...crisisContacts, contact]);
  };

  const addFaq = (question, answer) => {
    setFaq([...faq, { question, answer }]);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFaq = faq.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div>
        <h3>Audio Messages</h3>
        <button onClick={() => handleAudioMessage('New Audio Message')}>Send Audio Message</button>
        <ul>
          {audioMessages.map((audio, index) => (
            <li key={index}>{audio}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Crisis Contacts</h3>
        <button onClick={() => addCrisisContact('New Crisis Contact')}>Add Crisis Contact</button>
        <ul>
          {crisisContacts.map((contact, index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>FAQ</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search FAQ"
        />
        <button onClick={() => addFaq('New Question', 'New Answer')}>Add FAQ</button>
        <ul>
          {filteredFaq.map((item, index) => (
            <li key={index}>
              <strong>{item.question}</strong>: {item.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportCommunication;
