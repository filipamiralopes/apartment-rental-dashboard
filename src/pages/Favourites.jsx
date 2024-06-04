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
