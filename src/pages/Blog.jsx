import { useState } from "react";
import MyButton from "../components/Button/MyButton";
import RightSideBar from "../components/SideBar/RightSideBar";
import Modal from "../components/Modal";
import Card from "../components/Card";

const Blog = () => {
  const [open, setOpen] = useState(false);
  const [titleContent, setTitleContent] = useState([]);
  console.log(titleContent);

  const handleUpdateContent = (title, content) => {
    setTitleContent(function (prevVals) {
      if (title === "" || content === "") {
        return [...prevVals];
      } else {
        return [...prevVals, { title, content }];
      }
    });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Blogs</h1>
      <MyButton
        variant="outlined"
        color="primary"
        name="Create"
        onClick={handleOpenModal}
      />
      <Modal
        status={open}
        state={handleCloseModal}
        handleUpdateContent={handleUpdateContent}
      />
      {/* <RightSideBar /> */}
      {titleContent.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </div>
  );
};

export default Blog;
