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
import MyButton from "./Button/MyButton";
import { Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CommentBox from "./CommentBox";
import CommentCard from "./CommentCard.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenModal = ({
  expandBlog,
  handleCloseBlog,
  content,
  isMobile,
  handleLike,
  likeCount,
  isLiked,
}) => {
  const [commentText, setCommentText] = useState(null);

  const handleCommentText = (text) => {
    setCommentText(text);
  };

  return (
    <div className="full-screen-modal">
      <Dialog
        fullScreen
        open={expandBlog}
        // onClose={state}
        TransitionComponent={Transition}
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <MyButton
          onClick={handleCloseBlog}
          style={{
            position: "absolute",
            left: "100%",
            transform: "translateX(-100%)",
          }}
          color={"black"}
          icon={<CloseIcon />}
        />
        <div style={{ width: isMobile ? "98vw" : "700px", margin: "0 auto" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              fontFamily: "cursive",
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: 1,
              marginTop: isMobile ? "2rem" : "5rem",
            }}
          >
            {content.title}
          </Typography>
          <Typography
            component="span"
            sx={{
              paddingBottom: ".5rem",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              margin: ".5rem 0",
            }}
          >
            {/* <AccountCircleIcon
              sx={{ paddingRight: ".5rem", height: "3rem", width: "auto" }}
            ></AccountCircleIcon>{" "} */}
            <Avatar
              sx={{ marginRight: ".5rem" }}
              alt="Roshan Khadka"
              src="/static/images/avatar/1.jpg"
            />
            Roshan Khadka
            <div className="card-footer">
              <EditCalendarIcon></EditCalendarIcon>
              <span>{content.date}</span>
            </div>
          </Typography>
          <Divider />
          <div style={{ display: "flex", margin: ".5rem 0" }}>
            <div className="card-footer" onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon sx={{ color: "pink" }}></FavoriteIcon>
              ) : (
                <FavoriteBorderIcon></FavoriteBorderIcon>
              )}
              <span>{likeCount}</span>
            </div>
            <div className="card-footer">
              <CommentIcon></CommentIcon>
              <span>{0}</span>
            </div>
          </div>
          <Divider />
          <Typography sx={{ margin: "1rem" }} component="div">
            {content.content}
          </Typography>
          <Divider />
          <div>
            <CommentBox handleCommentText={handleCommentText} />
          </div>
          <div>
            <CommentCard commentText={commentText} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FullScreenModal;
