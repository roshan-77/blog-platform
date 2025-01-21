import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SnackBar from "./SnackBar";
import GetDate from "./GetDate";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    width: "700px", // Modal width is initially 80% of the screen width
    maxWidth: "700px", // Max width is 700px of the viewport width, ensuring it doesn’t go beyond that
    minWidth: "50vw",
    height: "70%", // Set minimum width to avoid it getting too small
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    transition: "width 0.2s ease-in-out",
    // Smooth transition when resizing
  },
}));

const Modal = ({ status, state, handleUpdateContent }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rows, setRows] = useState(10);
  const [date, setDate] = useState("");

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && window.innerHeight < 700) {
        setRows(8); // Fewer rows on smaller screens (mobile)
      } else if (window.innerWidth < 600) {
        setRows(15); // Fewer rows on smaller screens (mobile)
      } else if (window.innerWidth < 900) {
        setRows(12); // Default rows for medium-sized screens (tablets)
      } else {
        setRows(10); // More rows for larger screens (desktop)
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Trigger the resize handler immediately to set initial rows on component mount
    handleResize();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSaveChanges = () => {
    // setDate();
    handleUpdateContent(title, content, GetDate());
    state();
    setTitle("");
    setContent("");
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={state}
        aria-labelledby="customized-dialog-title"
        open={status}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Write a Blog
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={state}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            id="outlined-multiline-flexible"
            name="title"
            label="Title"
            fullWidth
            onChange={handleChange}
            sx={{ paddingBottom: "2rem" }}
          ></TextField>
          <TextField
            name="content"
            fullWidth
            multiline
            rows={rows}
            onChange={handleChange}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleSaveChanges()}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Modal;
