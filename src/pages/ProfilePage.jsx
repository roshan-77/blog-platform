import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const names = useContext(UserContext);
  const [name, setName] = useState(names);
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState(
    "Full Stack Developer passionate about building amazing applications."
  );
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Profile updated:", { name, email, bio });
  };

  const handleLogout = () => {
    console.log("Logged out");
    // Add logout logic here
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Profile Picture */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Avatar
          src={profilePic || "https://via.placeholder.com/150"}
          sx={{ width: 100, height: 100 }}
        />
        <IconButton
          component="label"
          sx={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            bottom: "65%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <PhotoCamera />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </IconButton>
      </Box>

      {/* User Info */}
      <Typography variant="h5" textAlign="center" marginBottom="1rem">
        Profile Details
      </Typography>

      <Grid container spacing={2}>
        {/* Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
          />
        </Grid>

        {/* Bio */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            variant="outlined"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>

      {/* Save Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        fullWidth
        sx={{ marginTop: "1.5rem" }}
      >
        Save Changes
      </Button>

      <Divider sx={{ margin: "2rem 0" }} />

      {/* Logout Button */}
      <Button variant="outlined" color="error" onClick={handleLogout} fullWidth>
        Logout
      </Button>
    </Box>
  );
};

export default ProfilePage;
