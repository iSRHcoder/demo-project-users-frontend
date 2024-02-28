/* eslint-disable react/no-unescaped-entities */
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const UsersForm = () => {
  const [userData, setUserData] = useState([]);
  const apiUrl = import.meta.env.VITE_BACKEND_DOMAIN;
  const formHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const createBtnHandler = async () => {
    try {
      await axios.post(`${apiUrl}/api/adduser`, {
        userData,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h3>User's-Form</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Full Name"
            type="text"
            name="fullName"
            onChange={formHandler}
          />
          <TextField
            label="Email"
            type="text"
            name="email"
            onChange={formHandler}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={formHandler}
          />
        </div>

        <div>
          <TextField
            label="Mobile No."
            type="text"
            name="mobileNum"
            onChange={formHandler}
          />
          <TextField
            label="Education"
            type="text"
            name="education"
            onChange={formHandler}
          />
          <TextField
            label="Address"
            type="text"
            name="address"
            onChange={formHandler}
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="success"
            onClick={createBtnHandler}
          >
            Create & Save to DB
          </Button>
        </div>
      </Box>
    </>
  );
};

export default UsersForm;
