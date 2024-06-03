import React from "react";
import { Link, useParams } from "react-router-dom";
import placeImage from '../assets/placeholder-photo.jpg';

const RentalDetail = (props) => {
  const { rentals } = props;
  const { rentalId } = useParams();
  const filteredRentals = rentals.find((unit) => {
    if (unit.id == rentalId) {
      return true;
    }
  });

  return (
    <div className="rental-detail">
      <div id="rental-detail-image">
      <img src={filteredRentals.picture_url?.url || placeImage} alt={filteredRentals.name} />
      </div>
      <h2>{filteredRentals.name}</h2>
      <h4>{filteredRentals.neighbourhood}, {filteredRentals.city}</h4>
      <h3>{filteredRentals.price},00€/por noche | Score: {filteredRentals.review_scores_rating}%</h3>
      <p>{filteredRentals.host_name} | hoste since {filteredRentals.host_since} | Typically responds {filteredRentals.host_response_time}</p>
      <p><b>Comentario del anunciante</b></p>
      <p>{filteredRentals.description}</p>
      <br/>
      <Link to={`/edit-rental/${filteredRentals.id}`}>
  <button>Edit Unit</button>
</Link>
    </div>
  );
};

export default RentalDetail;
