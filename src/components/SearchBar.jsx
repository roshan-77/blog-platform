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
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
          width: { xs: "100%", sm: "500px" }, // Responsive width
          margin: "16px auto", // Spacing
          backgroundColor: "#fff", // Optional for contrast
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            margin: " 0 1rem ",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "90%",
          top: "90%",
          left: "2%",
          // display: "flex",
          // justifyContent: "center",
          // flexWrap: "wrap",
          zIndex: query === "" ? -1 : 10,
          display: query === "" ? "none" : "",
          padding: "0 .5rem",
          backgroundColor: "white",
          border: "2px solid grey",
          boxShadow: "10px -10px 20px rgba(0, 0, 0, .1)",
          // transform: "translate(-50%, 50%)",
        }}
      >
        <div>{query}</div>
        <div>{query}</div>
        <div>{query}</div>
        <div>{query}</div>
        <div>{query}</div>
      </div>
    </div>
  );
};

export default SearchBar;
