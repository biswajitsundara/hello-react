import React, { useState } from "react";
import { useEffect } from "react";
import { createConnection } from "./chat";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <div>
      <label htmlFor="">Server URL</label>
      <input
        type="text"
        value={serverUrl}
        onChange={(e) => setServerUrl(e.target.value)}
      />
    </div>
  );
}

export default ChatRoom;
