import React from "react";
import { Link } from "react-router-dom";
import ApartmentCard from "../components/ApartmentCard";

const Favourites = ({
  favRentals,
  handleDeleteUnit,
  handleAddToFavourites,
}) => {
  return (
    <div className="favs-container">
      <h2>Favourites:</h2>
      {favRentals.map((unit) => {
        return (
        //   <div key={unit.id} className="rental-unit">
        //     <Link to={`/rentals/${unit.id}`}>
        //       <h4>{unit.name}</h4>
        //     </Link>
        //   </div>

            <ApartmentCard
              key={unit.id}
              rental={unit}
              onDelete={handleDeleteUnit}
              handleAddToFavourites={handleAddToFavourites}
              favRentals={favRentals}
            />
        );
      })}
    </div>
  );
};

export default Favourites;
