import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home Page</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/add-rental">Add Rental</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Sidebar;
