import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import LoginContext from "../context/LoginContext";
const Profile = () => {
  const { setLoginStatus } = useContext(LoginContext);
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginStatus(false);
        alert("logout successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Profile;
