import Login from "./Login";
import Profile from "./Profile";
import UserContextProvider from "./UserContextProvider";

function AppCntxBasic() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
      </UserContextProvider>
  );
}

export default AppCntxBasic;
