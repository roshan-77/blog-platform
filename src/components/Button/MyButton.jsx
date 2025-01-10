import { Button } from "@mui/material";

const MyButton = ({ variant, color, myButtonStyles, name, onClick }) => {
  return (
    <Button
      variant={variant}
      color={color}
      style={myButtonStyles}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default MyButton;
