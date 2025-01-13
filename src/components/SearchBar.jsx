import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    console.log("Search query:", event.target.value); // For debugging or API calls
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={query}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: { xs: "100%", sm: "300px" }, // Responsive width
        margin: "16px auto", // Spacing
        backgroundColor: "#fff", // Optional for contrast
        borderRadius: "4px",
      }}
    />
  );
};

export default SearchBar;
