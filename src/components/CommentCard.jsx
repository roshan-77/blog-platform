import { Card } from "@mui/material";
import { CardContent, Typography, TextField } from "@mui/material";
import { Avatar } from "@mui/material";

const CommentCard = ({ commentContents }) => {
  return (
    <div style={{ padding: "1rem 0", borderRadius: "2rem" }}>
      <Card sx={{ paddingBottom: "0px" }}>
        <CardContent
          sx={{
            height: "100%",
            margin: "1rem 0",
            padding: "0px",
            "&.MuiCardContent-root": {
              paddingBottom: "0px",
            },
          }}
        >
          <CardContent
            sx={{ display: "flex", padding: "0px", paddingBottom: "0px" }}
          >
            {/* <AccountCircleIcon
              sx={{ paddingRight: ".5rem", height: "3rem", width: "auto" }}
            ></AccountCircleIcon>{" "} */}
            <Avatar
              sx={{ margin: "0 .5rem" }}
              alt="Roshan Khadka"
              src="/static/images/avatar/1.jpg"
            />
            <div>
              <Typography sx={{ fontWeight: "bold" }}>
                {commentContents.commentUserName}
              </Typography>
              <Typography sx={{ fontSize: ".9rem" }}>
                {commentContents.commentCreatedDate}
              </Typography>
            </div>
          </CardContent>

          <Typography sx={{ margin: ".5rem .5rem 0 .7rem" }}>
            {commentContents.commentContent}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentCard;
