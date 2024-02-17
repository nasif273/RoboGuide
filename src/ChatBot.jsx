import React, { useState } from 'react';
import './ChatBot.css'; // Assume you have a CSS file for styling
import axios from 'axios'; // Import Axios

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // Add the new message to the messages array
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    try {
      // Send the message to the Flask backend
      const response = await axios.post('http://localhost:5000/ask', { question: inputText });
      
      // Add the response from the backend to the messages array
      setMessages([...messages, { text: response.data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        Robo Guide Chat
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
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
