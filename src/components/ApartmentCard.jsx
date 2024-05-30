import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const ApartmentCard = ({ rental, onDelete }) => {
  return (
    <div className="rental-unit">
      <div className="img-box-rental">
        <img src={rental.picture_url.url} alt={`Photo of ${rental.name}`} />
      </div>
      <div className="unit-description">
        <div className="title">
          <h3>{rental.name}</h3>
          <h2 className="rating"><FontAwesomeIcon icon={faStar} /> {rental.review_scores_rating}/100</h2>
        </div>
        <p><b>Location:</b> {rental.city}, {rental.country}</p>
        <div className="unit-icons">
          <p><FontAwesomeIcon icon={faBed} /> {rental.bedrooms}</p>
          <p><FontAwesomeIcon icon={faBath} /> {rental.bathrooms}</p>
          <p><FontAwesomeIcon icon={faUsers} /> {rental.accommodates}</p>
        </div>
        <div className="price-rating">
          <p className="price">{rental.price}€</p>
        </div>
        <div className="labels">
          {rental.price <= 85 ? (
            <p className="great-deal-label">Great Deal!</p>
          ) : rental.price >= 150 ? (
            <p className="premium-label"><strong>Premium</strong></p>
          ) : (
            <span></span>
          )}
          {rental.review_scores_rating > 90 ? (
            <p className="super-host-label"><strong>Super Host!</strong></p>
          ) : (
            <span></span>
          )}
        </div>
        <button onClick={() => onDelete(rental.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ApartmentCard;