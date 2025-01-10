import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenModal = ({ expandBlog, handleCloseBlog, content }) => {
  return (
    <>
      <Dialog
        fullScreen
        open={expandBlog}
        // onClose={state}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseBlog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {content.title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseBlog}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {content.content}
        </Typography>
      </Dialog>
    </>
  );
};

export default FullScreenModal;
