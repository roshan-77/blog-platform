import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import contents from "../contents";

const SearchBar = ({ getQueryBlogs }) => {
  const [query, setQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (query === "") {
      setFilteredBlogs([]);
      return;
    }
    const filteredContents = contents.filter((content) => {
      return (
        content.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        content.category.toLowerCase().includes(query.toLowerCase().trim())
      );
    });
    setFilteredBlogs(filteredContents);
  }, [query]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    console.log("Search query:", event.target.value); // For debugging or API calls
  };

  useEffect(() => {
    getQueryBlogs(filteredBlogs);
  }, [getQueryBlogs, filteredBlogs]);

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
        {filteredBlogs.map((blog) => {
          return (
            <>
              {/* <div>{blog.title}</div> */}
              {/* <FullScreenModal content={blog} /> */}
            </>
          );
        })}
        <div>{filteredBlogs.length + " search results found."}</div>
      </div>
    </div>
  );
};

export default SearchBar;
