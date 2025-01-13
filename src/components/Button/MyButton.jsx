import { Button } from "@mui/material";

const MyButton = ({ variant, color, myButtonStyles, name, onClick, style }) => {
  const defaultStyle = {
    color: "black",
    borderRadius: "20px",
    margin: ".3rem",
    fontSize: ".7rem",
    padding: ".4rem 3rem",
    fontWeight: "bold",
  };

  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={style === "" ? defaultStyle : style}
    >
      {name}
    </Button>
  );
};

export default MyButton;
