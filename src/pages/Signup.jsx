import { Box, Button, TextField } from "@mui/material";
import { boxShadowsObj } from "../utils/color";
const Signup = () => {
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
        />
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Email"
          type="email"
          variant="standard"
        />
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Phone no"
          type="number"
          variant="standard"
        />
        <TextField
          required
          fullWidth
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button
          sx={{
            width: "100%",
            background: "grey",
            color: "white",
            marginTop: "24px",
            ":hover": { background: "#d52c2e" },
          }}
        >
          SIGNUP
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
