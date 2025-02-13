import MyButton from "../components/Button/MyButton";
import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import contents from "../contents";
import { ButtonContext } from "../context/ButtonContext";

function Home() {
  const categories = [
    "All",
    "React",
    "Software Development",
    "Python",
    "Java",
    "CSS",
  ];
  const [myFilteredBlogs, setMyFilteredBlogs] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [blogsToRender, setBlogsToRender] = useState("All");

  const handleBlogToRender = (category) => {
    setBlogsToRender(category);
  };

  const getQueryBlogs = (filteredBlogs) => {
    setMyFilteredBlogs(filteredBlogs);
    console.log(filteredBlogs);
  };

  return (
    <div
      style={{
        margin: "1rem auto",
        // padding: "0 1rem",
        width: isMobile ? "100vw" : "1000px",
      }}
    >
      <div
        className="searchbar-categories"
        style={
          !isMobile
            ? { display: "flex", justifyContent: "space-between" }
            : { display: "block" }
        }
      >
        <div
          className="search-bar"
          style={{
            paddingRight: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchBar getQueryBlogs={getQueryBlogs} />
        </div>
        <ButtonContext.Provider
          value={myFilteredBlogs.length > 0 ? "disabled" : "enabled"}
        >
          <Categories
            categories={categories}
            handleBlogToRender={handleBlogToRender}
          />
        </ButtonContext.Provider>
      </div>
      {/* Featured Blogs / Filtered Blogs */}
      {myFilteredBlogs.length > 0
        ? myFilteredBlogs.map((ct, index) => {
            return <Card id={index} content={ct} />;
          })
        : contents.map((ct, index) => {
            return blogsToRender === "All" ? (
              <Card id={index} content={ct} />
            ) : (
              ct.category === blogsToRender && <Card id={index} content={ct} />
            );
          })}
    </div>
  );
}

export default Home;
