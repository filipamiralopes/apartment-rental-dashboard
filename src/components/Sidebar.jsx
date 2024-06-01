import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home Page</Link>
      <Link to="/about">About</Link>
      <Link to="/add-rental">Add Rental</Link>
    </div>
  );
};

export default Sidebar;
