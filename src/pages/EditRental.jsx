import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import placeImage from "../assets/placeholder-photo.jpg";

const EditRental = ({ rentals, setRentals }) => {
  const { rentalId } = useParams();
  const foundUnit = rentals.find((unit) => unit.id === rentalId);

  const [country, setCountry] = useState(foundUnit.country);
  const [city, setCity] = useState(foundUnit.city);
  const [image, setImage] = useState(foundUnit.picture_url.url || "");
  const [neighbourhood, setNeighbourhood] = useState(foundUnit.neighbourhood);
  const [name, setName] = useState(foundUnit.name);
  const [description, setDescription] = useState(foundUnit.description);
  const [house_rules, setHouseRules] = useState(foundUnit.house_rules);
  const [host_name, setHostName] = useState(foundUnit.host_name);
  const [host_since, setHostSince] = useState(foundUnit.host_since);
  const [host_response_time, setHostResponseTime] = useState(
    foundUnit.host_response_time
  );
  const [property_type, setProperty_type] = useState(foundUnit.property_type);
  const [roomType, setRoomType] = useState(foundUnit.roomType);
  const [accommodates, setAccommodates] = useState(foundUnit.accommodates);
  const [bedrooms, setBedrooms] = useState(foundUnit.bedrooms);
  const [bathrooms, setBathrooms] = useState(foundUnit.bathrooms);
  const [price, setPrice] = useState(foundUnit.price);
  const [cleanFee, setCleanFee] = useState(foundUnit.cleaning_fee);
  const [cancelRental, setCancelRental] = useState(foundUnit.cancelRental);
  const [review_scores_rating, setReview_scores_rating] = useState(
    foundUnit.review_scores_rating
  );
  const nav = useNavigate();

  function handleEditRental(event) {
    event.preventDefault();

    const updatedUnit = {
      ...foundUnit,
      country,
      city,
      picture_url: { ...foundUnit.picture_url, url: image },
      neighbourhood,
      name,
      description,
      house_rules,
      host_name,
      host_since,
      host_response_time,
      property_type: property_type,
      room_type: roomType,
      accommodates,
      bedrooms,
      bathrooms,
      price,
      cleaning_fee: cleanFee,
      cancellation_policy: cancelRental,
      review_scores_rating,
    };
    const updatedListOfRentals = rentals.map((rental) => {
      if (rental.id == rentalId) {
        return updatedUnit;
      } else {
        return rental;
      }
    });

    setRentals(updatedListOfRentals);
    nav(`/rentals/${rentalId}`);
  }

  return (
    <div className="add-rental-page">
      <h1>Edit rental</h1>
      <div className="form-container">
        <form onSubmit={handleEditRental} className="form-left">
          <label>
            Country:<span> </span>
            <input
              name="country"
              type="text"
              placeholder="Enter the country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </label>
          <br />
          <label>
            City: <span> </span>
            <input
              name="city"
              type="text"
              placeholder="Enter the city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
          <br />
          <label>
            Neighbourhood:<span> </span>
            <input
              name="neighbourhood"
              type="text"
              placeholder="Enter the neighbourhood"
              value={neighbourhood}
              onChange={(event) => setNeighbourhood(event.target.value)}
            />
          </label>
          <br />
          <label>
            Picture url: <span> </span>
            <input
              name="image"
              type="text"
              placeholder="Insert picture"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </label>
          <br />
          <label>
            Name:<span> </span>
            <input
              name="name"
              type="text"
              placeholder="Enter the name of the property"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description:<span> </span>
            <textarea
              name="description"
              placeholder="Enter a description of the property"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br />
          <label>
            House rules:<span> </span>
            <input
              name="house_rules"
              type="text"
              placeholder="Are there any house rules?"
              value={house_rules}
              onChange={(event) => setHouseRules(event.target.value)}
            />
          </label>
          <br />
          <label>
            Hostname:<span> </span>
            <input
              name="host_name"
              type="text"
              placeholder="Your name as host"
              value={host_name}
              onChange={(event) => setHostName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Host since:<span> </span>
            <input
              name="host_since"
              type="date"
              value={host_since}
              onChange={(event) => setHostSince(event.target.value)}
            />
          </label>
          <br />
          <div onChange={(event) => setHostResponseTime(event.target.value)}>
            Host response time: <span> </span>
            <label className="host_response_time_options">
              <input name="host_response_time" type="radio" value="in 3 hours" />3
              hours <span> </span>
            </label>
            <label className="host_response_time_options">
              <input name="host_response_time" type="radio" value="in 3 days" />3
              days <span> </span>
            </label>
            <label className="host_response_time_options">
              <input name="host_response_time" type="radio" value="in 1 week" />1
              week<span> </span>
            </label>
          </div>
          
          <label>
            Property type:<span> </span>
            <select
              name="property-type"
              value={property_type}
              onChange={(event) => setProperty_type(event.target.value)}
            >
              <option value="Apartment">Apartment</option>
              <option value="Loft">Loft</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Room type:<span> </span>
            <select
              name="room-type"
              value={roomType}
              onChange={(event) => setRoomType(event.target.value)}
            >
              <option value="Entire home/apt">Entire home/apt</option>
              <option value="Private room">Private room</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <label>
            accommodates:<span> </span>
            <input
              name="accommodates"
              type="number"
              value={accommodates}
              min={0}
              onChange={(event) => setAccommodates(event.target.value)}
            />
          </label>
          <br />
          <label>
            Nrº of Bedrooms:<span> </span>
            <input
              name="bedrooms"
              type="number"
              value={bedrooms}
              min={0}
              onChange={(event) => setBedrooms(event.target.value)}
            />
          </label>
          <br />
          <label>
            Nrº of Bathrooms:<span> </span>
            <input
              name="bathrooms"
              type="number"
              value={bathrooms}
              min={0}
              onChange={(event) => setBathrooms(event.target.value)}
            />
          </label>
          <br />
          <label>
            Price per night:<span> </span>
            <input
              name="price"
              type="number"
              value={price}
              min={0}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <br />
          <label>
            Cleaning-fee:<span> </span>
            <input
              name="cleaning-fee"
              type="number"
              value={cleanFee}
              min={0}
              onChange={(event) => setCleanFee(event.target.value)}
            />
          </label>
          <br />
          <label>
            Cancelation policy:<span> </span>
            <select
              name="cancel-rental"
              value={cancelRental}
              onChange={(event) => setCancelRental(event.target.value)}
            >
              <option value="strict">Strict</option>
              <option value="moderate">Moderate</option>
              <option value="flexible">Flexible</option>
            </select>
          </label>
          <br />
          <label>
            Score: <span> </span>
            <input
              name="review_scores_rating"
              type="number"
              placeholder="0"
              min={0}
              max={100}
              value={review_scores_rating}
              onChange={(event) => setReview_scores_rating(event.target.value)}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
        <div className="form-right">
          <h2>Preview</h2>
          <img
            className="image-preview"
            src={image || placeImage}
            alt="Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default EditRental;
