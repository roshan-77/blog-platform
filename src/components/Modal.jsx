import { useState, useRef } from "react";
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

  const handleSaveChanges = () => {
    handleUpdateContent(title, content);
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
          ></TextField>
          <TextField
            name="content"
            fullWidth
            multiline
            rows={9}
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
