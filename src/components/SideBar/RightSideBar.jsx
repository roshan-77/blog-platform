import MyButton from "../Button/MyButton";
import "../../styles/global.css";

const RightSideBar = () => {
  return (
    <div className="right-side-bar">
      <h3>Right Side Bar</h3>
      <div>
        <span>Created: </span>
      </div>
      <div>
        <span>Last Updated: </span>
      </div>
      <MyButton variant="contained" color="" name="Save" />
      {/*We need to change "Save" to "Update" based on conditional rendering */}
      <MyButton variant="outlined" color="error" name="Delete" />
      <h3>Previous Versions</h3>
      ---------------------------
      <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ol>
    </div>
  );
};

export default RightSideBar;
