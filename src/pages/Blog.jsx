import { useState } from "react";
import MyButton from "../components/Button/MyButton";
import RightSideBar from "../components/SideBar/RightSideBar";
import Modal from "../components/Modal";

const Blog = () => {
  const [open, setOpen] = useState(false);

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
        name={"Create"}
        onClick={handleOpenModal}
      />
      <Modal status={open} state={handleCloseModal} />
      <RightSideBar />
    </div>
  );
};

export default Blog;
