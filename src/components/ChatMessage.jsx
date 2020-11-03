import React from "react";

import {} from "@ionic/react";
import Utility from "../Utility"
import "./ChatMessage.css"

const ChatMessage = ({ chat }) => {

  let chat_time = Utility.getTime(chat.time);
  
  return (
    <div className="chat-message-box">
        {chat.message}
        <div className="message-time">
            {chat_time}
        </div>

    </div>
  );
};

export default ChatMessage;
