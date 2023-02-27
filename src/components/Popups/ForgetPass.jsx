import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ForgetPass({ open, handleClose }) {
  const [email, setEmail] = React.useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("password link sended. please check mail...");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Reset Your Password</Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>

          <Box>
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Email"
              type="email"
              variant="standard"
              onChange={handleChange}
            />
            <Button
              sx={{
                display: "block",
                margin: "auto",
                background: "grey",
                color: "white",
                marginTop: "16px",
                ":hover": { background: "#d52c2e" },
              }}
              onClick={handleClick}
            >
              SEND RESET EMAIL
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
