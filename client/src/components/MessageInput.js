import React, { useState } from 'react';
import { SlCursor } from "react-icons/sl";
function MessageInput({ setMessages }) {
  const [input, setInput] = useState('');

const handleSendMessage = async () => {
  setMessages(prev => [...prev, { text: input, isUser: true }]);
  setInput('');

  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages(prev => [...prev, { text: data, isUser: false }]);
  } catch {
    setMessages(prev => [...prev, { text: 'Error retrieving response', isUser: false }]);
  }
};


  return (
    <div className="message-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSendMessage}><SlCursor /></button>
    </div>
  );
}

export default MessageInput;
