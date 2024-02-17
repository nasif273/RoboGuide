import React, { useState } from 'react';
import './ChatBot.css'; // Assume you have a CSS file for styling

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    // Add the new message to the messages array
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    // Here you would call your backend API to get the response from ChatGPT
    // Simulating a bot response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'This is a simulated response from the bot.', sender: 'bot' }]);
    }, 500);
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
        <input
          type="text"
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
