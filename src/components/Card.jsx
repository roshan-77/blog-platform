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

const Card = ({ content }) => {
  const [expandBlog, setExpandBlog] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const handleExpandBlog = () => {
    setExpandBlog(true);
  };

  const handleCloseBlog = (event) => {
    event.stopPropagation();
    setExpandBlog(false);
  };

  return (
    <div style={{ paddingTop: "1rem" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          aria-label="Expand"
        >
          <Typography
            component="span"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily:
                '"Sohne", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
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
          }}
        >
          <Typography className="multi-line-truncated-text">
            {content.content}
          </Typography>
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
            <span>Jan 13, 2025</span>
          </div>
          <div className="card-footer">
            <FavoriteBorderIcon></FavoriteBorderIcon>
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
      />
    </div>
  );
};

export default Card;
