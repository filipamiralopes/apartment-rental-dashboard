import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/">Home Page</Link>
        <a href="#About">About</a>
    </div>
  )
}

export default Sidebar  