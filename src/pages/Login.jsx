import { Box, Button, TextField, Typography } from "@mui/material";
import { boxShadowsObj } from "../utils/color";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router";
import { useState } from "react";
const Login = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const loginFn = () => {
    console.log(data);
  };
  const Navigate = useNavigate();
  const registerClick = () => {
    Navigate("/signup");
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: "520px",
          width: "100%",
          boxShadow: boxShadowsObj.boxShadow,
          padding: "40px",
          marginTop: "8%",
        }}
      >
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Email"
          type="email"
          variant="standard"
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          name="password"
          onChange={handleChange}
        />
        <Button
          sx={{
            width: "100%",
            background: "grey",
            color: "white",
            marginTop: "24px",
            ":hover": { background: "#d52c2e" },
          }}
          onClick={loginFn}
        >
          LOGIN
        </Button>
        <Box sx={{ marginTop: "24px" }}>
          <Typography textAlign={"center"} fontSize="12px">
            OR SIGNUP USING
          </Typography>
          <GoogleIcon
            fontSize="large"
            sx={{
              color: "#e34133",
              cursor: "pointer",
              marginTop: "8px",
            }}
          />
        </Box>
        <Typography fontSize="14px" sx={{ marginTop: "10px" }}>
          Not have an account ?{" "}
          <span
            style={{ color: "#d52c2e", cursor: "pointer" }}
            onClick={registerClick}
          >
            Click here
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
