import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { boxShadowsObj } from "../utils/color";
const Signup = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const signupFn = () => {
    console.log(data);
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
          label="Name"
          type="text"
          variant="standard"
          name="name"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          label="Email"
          type="email"
          variant="standard"
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          label="Phone no"
          type="number"
          variant="standard"
          name="number"
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
          onClick={signupFn}
        >
          SIGNUP
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
