import { useState } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [login] = useState(false);
  return login ? <Navigate to={"/profile"} /> : children;
};
export default PrivateRoute;
