import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faStar,
 faMagnifyingGlass,
 faHouse,
 faHeart,
 faPlus,
 faFile,

} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
      <Link to="/">
      <FontAwesomeIcon icon={faHouse} /> <span> </span>Home Page</Link>
      </div>
      <div className="sidebar-links">
      <Link to="/favourites">
      <FontAwesomeIcon icon={faHeart} /> <span> </span> Favourites</Link>
      </div>
      <div className="sidebar-links">
      <Link to="/add-rental">
      <FontAwesomeIcon icon={faPlus} /> <span> </span> Add Rental</Link>
      </div>
      <div className="sidebar-links">
      <Link to="/about">
      <FontAwesomeIcon icon={faFile} /> <span> </span> About</Link>
      </div>
    </div>
  );
};

export default Sidebar;
