import { Button } from "@mui/material";
import { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";

const MyButton = ({
  variant,
  color,
  myButtonStyles,
  name,
  onClick,
  style,
  icon,
}) => {
  const defaultStyle = {
    color: "black",
    borderRadius: "20px",
    margin: ".3rem",
    fontSize: ".7rem",
    // padding: ".4rem 3rem",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    minWidth: "auto",
  };
  const status = useContext(ButtonContext);

  return (
    <>
      {status === "disabled" ? (
        <Button
          variant={variant}
          color={color}
          onClick={onClick}
          sx={style === "" ? defaultStyle : style}
          disabled
        >
          {name}
          {icon}
        </Button>
      ) : (
        <Button
          variant={variant}
          color={color}
          onClick={onClick}
          sx={style === "" ? defaultStyle : style}
        >
          {name}
          {icon}
        </Button>
      )}
    </>
  );
};

export default MyButton;
