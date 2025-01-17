import { BorderColor, Margin } from "@mui/icons-material";
import MyButton from "./Button/MyButton";
import { withTheme } from "@emotion/react";
import { colors } from "@mui/material";
import { useState } from "react";

const Categories = ({ categories, handleBlogToRender }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRender = (category, index) => {
    handleBlogToRender(category);
    setActiveIndex(index);
  };

  const styles = {
    color: "black",
    borderRadius: "20px",
    margin: ".3rem",
    fontSize: ".7rem",
    padding: ".4rem 3rem",
    fontWeight: "bold",
  };

  return (
    <div
      className="categories"
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "start",
        width: "100%",
        overflowX: "scroll",
        alignItems: "center",
      }}
    >
      {categories.map((category, index) => {
        return (
          <MyButton
            id={index}
            variant={activeIndex === index ? "contained" : "outlined"}
            name={category}
            style={""}
            onClick={() => handleRender(category, index)}
          />
        );
      })}
    </div>
  );
};

export default Categories;
