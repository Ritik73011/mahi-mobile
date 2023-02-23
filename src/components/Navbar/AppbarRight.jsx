import { Box, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
const AppbarRight = () => {
  const [login] = useState(false);
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
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
        <AccountCircleIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick("/profile")}
        />
      ) : (
        <LoginIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick("/login")}
        />
      )}
    </Box>
  );
};

export default AppbarRight;
