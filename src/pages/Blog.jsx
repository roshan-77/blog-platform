import { useState, lazy, Suspense } from "react";
import MyButton from "../components/Button/MyButton";
import RightSideBar from "../components/SideBar/RightSideBar";
import Card from "../components/Card";
import { CircularProgress } from "@mui/material";
import SnackBar from "../components/SnackBar";
const Modal = lazy(() => import("../components/Modal"));

const Blog = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  const [titleContent, setTitleContent] = useState([]);
  const [loadSnackBar, setLoadSnackBar] = useState(false);
  const [snackbarAlertProps, setsnackbarAlertProps] = useState({});

  const handleUpdateContent = (title, content, date, comments) => {
    if (title === "" || content === "") {
      setsnackbarAlertProps({
        severity: "error",
        message: "Both title and content are required",
      });
    } else {
      setsnackbarAlertProps({
        severity: "success",
        message: "Blog has been successfully created",
      });
    }
    setLoadSnackBar(true);

    setTitleContent(function (prevVals) {
      if (title === "" || content === "") {
        return [...prevVals];
      } else {
        return [...prevVals, { title, content, date, comments }];
      }
    });
  };

  const handleCloseSnackBar = () => {
    setLoadSnackBar(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        margin: "1rem auto",
        // padding: "0 1rem",
        width: isMobile ? "90vw" : "1000px",
      }}
    >
      <h1>Your Blogs</h1>
      <MyButton
        variant="outlined"
        color="primary"
        name="Create"
        style={""}
        onClick={handleOpenModal}
      />
      {open && ( //This is lazy loading
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute", // Make it position relative to the viewport
                top: "50%", // Move the top edge to 50% of the viewport height
                left: "50%", // Move the left edge to 50% of the viewport width
                transform: "translate(-50%, -50%)", // Adjust position to center fully
                textAlign: "center",
              }}
            >
              <CircularProgress />
            </div>
          }
        >
          <Modal
            status={open}
            state={handleCloseModal}
            handleUpdateContent={handleUpdateContent}
          />
        </Suspense>
      )}
      <SnackBar
        loadSnackBar={loadSnackBar}
        handleCloseSnackBar={handleCloseSnackBar}
        snackbarAlertProps={snackbarAlertProps}
      />
      {/* <RightSideBar /> */}
      {titleContent.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </div>
  );
};

export default Blog;
