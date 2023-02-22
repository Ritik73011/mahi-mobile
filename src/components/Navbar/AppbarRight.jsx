import { Box, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const AppbarRight = () => {
  const [login] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" noWrap component="div">
        Company name
      </Typography>
      {login ? (
        <AccountCircleIcon fontSize="large" />
      ) : (
        <LoginIcon fontSize="large" />
      )}
    </Box>
  );
};

export default AppbarRight;
