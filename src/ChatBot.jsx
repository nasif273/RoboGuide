import React, { useState } from 'react';
import './ChatBot.css'; // Make sure this points to the updated CSS file
import axios from 'axios';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    try {
      const response = await axios.post('http://localhost:5000/ask', { question: inputText });
      setMessages(prevMessages => [...prevMessages, { text: response.data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Robo Guide Chat</div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>{message.text}</div>
        ))}
      </div>
      <form className="chat-footer" onSubmit={sendMessage}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default ChatBot;
