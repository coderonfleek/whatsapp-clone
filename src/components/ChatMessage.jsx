import React from "react";

import {} from "@ionic/react";
import "./ChatMessage.css"

const ChatMessage = ({ chat }) => {
  
  return (
    <div className="chat-message-box">
        {chat.message}
        <p align="right">
            <small>{chat.time}</small>
        </p>

    </div>
  );
};

export default ChatMessage;
