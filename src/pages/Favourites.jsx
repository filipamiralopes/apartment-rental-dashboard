import React from "react";

const Favourites = ({favRentals}) => {
  return (
    <div className="favs-container">
      <h2>Favourites:</h2>
      {favRentals.map((oneFav) => {
        return <h4 key={oneFav.id}>{oneFav.name}</h4>;
      })}
    </div>
  );
};

export default Favourites;
