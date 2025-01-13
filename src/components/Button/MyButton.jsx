import { Button } from "@mui/material";

const MyButton = ({ variant, color, myButtonStyles, name, onClick, style }) => {
  return (
    <Button
      variant={variant}
      color={color}
      style={myButtonStyles}
      onClick={onClick}
      sx={style}
    >
      {name}
    </Button>
  );
};

export default MyButton;
