import MyButton from "../components/Button/MyButton";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Home() {
  const categories = [
    "All",
    "React",
    "JavaScript",
    "Python",
    "Java",
    "CSS",
    "All",
    "React",
    "JavaScript",
    "Python",
    "Java",
    "CSS",
    "All",
    "React",
    "JavaScript",
    "Python",
    "Java",
    "CSS",
    "All",
    "React",
    "JavaScript",
    "Python",
    "Java",
    "CSS",
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ margin: "20px 15px" }}>
      <div
        style={
          !isMobile
            ? { display: "flex", justifyContent: "space-between" }
            : { display: "block" }
        }
      >
        <div className="search-bar">
          <SearchBar />
        </div>
        <Categories categories={categories} />
      </div>
      {/* Featured Blogs / Filtered Blogs */}
      <Card
        content={{
          title: "Hi",
          content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. ",
        }}
      />
    </div>
  );
}

export default Home;
