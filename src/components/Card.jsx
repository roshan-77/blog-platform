import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import MyButton from "./Button/MyButton";
import FullScreenModal from "./FullScreenModal";

const Card = ({ content }) => {
  const [expandBlog, setExpandBlog] = useState(false);

  const handleExpandBlog = () => {
    setExpandBlog(true);
  };

  const handleCloseBlog = () => {
    setExpandBlog(false);
  };

  return (
    <div style={{ padding: "2rem 1rem" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          aria-label="Expand"
        >
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            {content.title}
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Typography className="multi-line-truncated-text">
            {content.content}
          </Typography>
        </AccordionDetails>
        <Divider />
        <MyButton
          variant="outlined"
          name="Read More"
          onClick={handleExpandBlog}
          myButtonStyles={{ margin: "5px" }}
        />
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
