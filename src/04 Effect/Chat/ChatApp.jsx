import React, { useState } from "react";
import ChatRoom from "./ChatRoom";

function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <div>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

export default ChatApp;
