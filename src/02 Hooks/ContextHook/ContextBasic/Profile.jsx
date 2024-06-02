import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Profile</h1>
      <p>Hello {user}</p>
    </>
  );
}

export default Profile;
