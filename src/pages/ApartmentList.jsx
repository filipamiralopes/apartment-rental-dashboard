import { Link } from "react-router-dom";
import ApartmentCard from "../components/ApartmentCard";

const ApartmentList = (props) => {
  const { rentals } = props;

  return (
    <div className="apartment-list">
      <Link to="/add-rental">
        <button id="add-property-btn">Add Property</button>
      </Link>
      {rentals.map((unit) => (
        <ApartmentCard
          key={unit.id}
          rental={unit}
          onDelete={props.handleDeleteUnit}
        />
      ))}
    </div>
  );
};

export default ApartmentList;
