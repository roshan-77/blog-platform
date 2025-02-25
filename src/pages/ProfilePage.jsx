import React, { useState } from "react";
import {
  Container,
  Grid,
  Avatar,
  Typography,
  Paper,
  Button,
  Box,
  TextField,
  Divider,
} from "@mui/material";

// Initial user data for the profile and edit form
const initialUserData = {
  name: "John Doe",
  bio: "A passionate blogger sharing thoughts on tech, lifestyle, and more.",
  profilePic: "https://via.placeholder.com/150",
};

const ProfilePage = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit modes
  const [error, setError] = useState(null); // For form validation

  // Handle field changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.bio) {
      setError("Name and Bio are required");
      return;
    }

    // You can add logic here to handle the form submission (e.g., API request)
    setIsEditing(false); // Close edit mode after saving
    setError(null);
    alert("Profile updated successfully!");
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {/* Profile Section */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={8}
            sx={{ padding: 4, textAlign: "center", borderRadius: 3 }}
          >
            <Avatar
              alt="Profile Picture"
              src={userData.profilePic}
              sx={{
                width: 150,
                height: 150,
                margin: "auto",
                boxShadow: 4,
                border: "5px solid #fff",
                marginBottom: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              {userData.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 2 }}
            >
              {userData.bio}
            </Typography>

            {!isEditing ? (
              // When not in edit mode, show the "Edit Profile" button
              <Box sx={{ marginTop: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsEditing(true)} // Switch to edit mode
                  sx={{ paddingX: 4 }}
                >
                  Edit Profile
                </Button>
              </Box>
            ) : (
              // In edit mode, display the form to edit profile
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <TextField
                  label="Bio"
                  variant="outlined"
                  fullWidth
                  name="bio"
                  value={userData.bio}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  multiline
                  rows={4}
                  required
                />
                <TextField
                  label="Profile Picture URL"
                  variant="outlined"
                  fullWidth
                  name="profilePic"
                  value={userData.profilePic}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                />
                {/* Show error message if validation fails */}
                {error && (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{ marginBottom: 2 }}
                  >
                    {error}
                  </Typography>
                )}
                <Box sx={{ marginTop: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ paddingX: 4 }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </form>
            )}
          </Paper>
        </Grid>

        {/* Blog Stats Section */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={8} sx={{ padding: 4, borderRadius: 3 }}>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
              Blog Statistics
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Posts</Typography>
              <Typography variant="body2" color="primary">
                {45}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography variant="body2">Followers</Typography>
              <Typography variant="body2" color="primary">
                {120}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography variant="body2">Following</Typography>
              <Typography variant="body2" color="primary">
                {75}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Button variant="outlined" color="primary" fullWidth>
                View Analytics
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
