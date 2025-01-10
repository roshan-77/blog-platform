import MyButton from "../components/Button/MyButton";

function Home() {
  const myButtonStyles = {
    margin: "5px",
    borderRadius: "20px",
  };
  return (
    <div>
      <h1>Home</h1>
      <div>Category</div>
      {/* Filters button */}
      <MyButton
        variant="outlined"
        color="primary"
        name="Education"
        myButtonStyles={myButtonStyles}
      />
      <MyButton
        variant="outlined"
        color="primary"
        name="Travel"
        myButtonStyles={myButtonStyles}
      />

      {/* Featured Blogs / Filtered Blogs */}
    </div>
  );
}

export default Home;
