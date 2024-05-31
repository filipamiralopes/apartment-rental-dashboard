import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home Page</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Sidebar;
