import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
const PrivateRoute = ({ children }) => {
  const { login } = useContext(LoginContext);
  const route = window.location.pathname.split("/")[1];
  if (route === "login") return login ? <Navigate to={"/profile"} /> : children;
  return login ? children : <Navigate to={"/login"} />;
};
export default PrivateRoute;
