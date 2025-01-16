import { Button } from "@mui/material";

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

  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={style === "" ? defaultStyle : style}
    >
      {name}
      {icon}
    </Button>
  );
};

export default MyButton;
