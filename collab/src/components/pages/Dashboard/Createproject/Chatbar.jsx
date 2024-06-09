import React, { useState } from 'react';
import './Chatbar.css';



function Chatbar() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');


  function handleSendMessage() {
    if (newMessage.trim()) {
      setMessages([newMessage, ...messages]);
      setNewMessage('');
     
    }
  }

  return (
    <div className="chat-bar">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbar;
