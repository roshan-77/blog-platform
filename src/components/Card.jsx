import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import MyButton from "./Button/MyButton";
import FullScreenModal from "./FullScreenModal";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { EditCalendar } from "@mui/icons-material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useMediaQuery, useTheme } from "@mui/material";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GetDate from "./GetDate";

const Card = ({ content }) => {
  const [expandBlog, setExpandBlog] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLike = (e) => {
    setIsLiked(!isLiked);
    !isLiked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
  };

  const handleExpandBlog = (event) => {
    event.stopPropagation();
    setExpandBlog(true);
  };

  const handleCloseBlog = (event) => {
    event.stopPropagation();
    setExpandBlog(false);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          aria-label="Expand"
          sx={{ height: "auto" }}
        >
          <Typography
            component="span"
            variant="poster"
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              fontFamily: "cursive",
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: 1,
            }}
            onClick={handleExpandBlog}
          >
            {content.title}
          </Typography>
        </AccordionSummary>
        {/* <Divider /> */}
        <AccordionDetails
          onClick={handleExpandBlog}
          sx={{
            cursor: "pointer",
            paddingTop: "0px",
          }}
        >
          <Typography
            component="span"
            sx={{
              paddingBottom: ".5rem",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1rem",
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
          </Typography>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
            <Typography className="multi-line-truncated-text">
              {content.content}
            </Typography>
            <img
              style={{
                objectFit: "contain",
                width: "auto",
                height: isMobile ? "5rem" : "10rem",
                boxSizing: "inherit",
              }}
              src="https://gstatic.com/webp/gallery/1.jpg"
            ></img>
          </div>
        </AccordionDetails>
        {/* <Divider />
        <MyButton
          variant="outlined"
          name="Read More"
          onClick={handleExpandBlog}
          style={""}
        /> */}
        <AccordionDetails sx={{ display: "flex", alignItems: "center" }}>
          <div className="card-footer">
            <EditCalendarIcon></EditCalendarIcon>
            {content.date}
          </div>
          <div className="card-footer" onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
            ) : (
              <FavoriteBorderIcon></FavoriteBorderIcon>
            )}
            <span>{likeCount}</span>
          </div>
          <div className="card-footer">
            <CommentIcon></CommentIcon>
            <span>{commentCount}</span>
          </div>
        </AccordionDetails>
      </Accordion>
      <FullScreenModal
        expandBlog={expandBlog}
        handleCloseBlog={handleCloseBlog}
        content={content}
        isMobile={isMobile}
        handleLike={handleLike}
        likeCount={likeCount}
        isLiked={isLiked}
      />
    </div>
  );
};

export default Card;
