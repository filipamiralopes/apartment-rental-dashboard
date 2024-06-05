import { Link } from "react-router-dom";
import ApartmentCard from "../components/ApartmentCard";

const ApartmentList = ({rentals, handleDeleteUnit, handleAddToFavourites, favRentals}) => {

  return (
    <div className="apartment-list">
      {rentals.map((unit) => (
        <ApartmentCard
          key={unit.id}
          rental={unit}
          onDelete={handleDeleteUnit}
          handleAddToFavourites={handleAddToFavourites}
          favRentals={favRentals}
        />
      ))}
    </div>
  );
};

export default ApartmentList;
//