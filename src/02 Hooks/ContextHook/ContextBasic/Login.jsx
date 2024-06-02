import { useState, useContext } from "react";
import UserContext from "./UserContext";

function Login() {
  const [username, setUserName] = useState("Guest");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  };

  return (
    <form action="">
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Login;
