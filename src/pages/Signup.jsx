import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { boxShadowsObj } from "../utils/color";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, getDatabase } from "firebase/database";
import { auth } from "../private";
const Signup = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  function insertUserData(userId, name, email, phoneNum) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      name: name,
      email: email,
      phone: phoneNum,
    });
  }

  const createUser = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;
        insertUserData(uid, data.name, data.email, data.number);
        alert(uid);
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };

  const signupFn = () => {
    createUser();
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
