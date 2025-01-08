import { Link } from "react-router-dom";

const NavItem = ({ path, label }) => {
  return (
    <li>
      <Link to={path}>{label}</Link>
    </li>
  );
};

export default NavItem;
