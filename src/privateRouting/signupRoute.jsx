import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
const SignupRoute = ({ children }) => {
  const { login } = useContext(LoginContext);
  return login ? <Navigate to={"/profile"} /> : children;
};
export default SignupRoute;
