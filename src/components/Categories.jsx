import { BorderColor, Margin } from "@mui/icons-material";
import MyButton from "./Button/MyButton";
import { withTheme } from "@emotion/react";
import { colors } from "@mui/material";

const Categories = ({ categories }) => {
  const styles = {
    color: "black",
    borderRadius: "20px",
    margin: ".3rem",
    fontSize: ".7rem",
    padding: ".4rem 3rem",
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
        paddingRight: "1.5rem",
        alignItems: "center",
      }}
    >
      {categories.map((category, index) => {
        return (
          <MyButton
            id={index}
            variant="outlined"
            name={category}
            style={styles}
          />
        );
      })}
    </div>
  );
};

export default Categories;
