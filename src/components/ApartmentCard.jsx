import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const ApartmentCard = ({
  rental,
  onDelete,
  handleAddToFavourites,
  favRentals,
}) => {
  let location = useLocation();

  return (
    <div className="rental-unit">
      <div className="img-box-rental">
        <Link to={`/rentals/${rental.id}`}>
          <img src={rental.picture_url.url} alt={`Photo of ${rental.name}`} />
        </Link>
      </div>
      {(location.pathname === "/" || location.pathname === "/favourites") && favRentals.includes(rental) ? null : (
        <>
          <button
            onClick={() => {
              handleAddToFavourites(rental);
            }}
          >
            Add to favourites
          </button>
        </>
      )}
      <div className="unit-description">
        <div className="title">
          <Link to={`/rentals/${rental.id}`}>
            <h3>{rental.name}</h3>
          </Link>
          <h2 className="rating">
            <FontAwesomeIcon icon={faStar} /> {rental.review_scores_rating}/100
          </h2>
        </div>
        <p>
          <b>Location:</b> {rental.city}, {rental.country}
        </p>
        <div className="unit-icons">
          <p>
            <FontAwesomeIcon icon={faBed} /> {rental.bedrooms}
          </p>
          <p>
            <FontAwesomeIcon icon={faBath} /> {rental.bathrooms}
          </p>
          <p>
            <FontAwesomeIcon icon={faUsers} /> {rental.accommodates}
          </p>
        </div>
        <div className="price-rating">
          <p className="price">{rental.price}€</p>
        </div>
        <div className="labels">
          {rental.price <= 85 ? (
            <p className="great-deal-label">Great Deal!</p>
          ) : rental.price >= 150 ? (
            <p className="premium-label">
              <strong>Premium</strong>
            </p>
          ) : (
            <span></span>
          )}
          {rental.review_scores_rating > 90 ? (
            <p className="super-host-label">
              <strong>Super Host!</strong>
            </p>
          ) : (
            <span></span>
          )}
        </div>
        <button onClick={() => onDelete(rental.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
