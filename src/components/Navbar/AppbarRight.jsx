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
      <Typography
        variant="h6"
        textTransform={"capitalize"}
        noWrap
        component="div"
      >
        {window.location.pathname === "/"
          ? "Home"
          : window.location.pathname.split("/")}
      </Typography>
      {login ? (
        <AccountCircleIcon fontSize="large" sx={{ cursor: "pointer" }} />
      ) : (
        <LoginIcon fontSize="large" sx={{ cursor: "pointer" }} />
      )}
    </Box>
  );
};

export default AppbarRight;
