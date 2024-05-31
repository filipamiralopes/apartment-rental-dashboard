import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddRental = ({ rentals, setRentals }) => {
  // State vars
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [house_rules, setHouseRules] = useState("");
  const [host_name, setHostName] = useState("");
  const [host_since, setHostSince] = useState("");
  const [host_response_time, setHostResponseTime] = useState("");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [roomType, setRoomType] = useState("Other");
  const [accomodates, setAccomodates] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [cleanFee, setCleanFee] = useState(0);
  const [cancelRental, setCancelRental] = useState("Flexible");
  const nav = useNavigate();

  // Functions
  function handleAddRental(event) {
    event.preventDefault();

    const newUnit = {
      country,
      city,
      "picture_url": {"url": image},
      neighbourhood,
      name,
      description,
      house_rules,
      host_name,
      host_since,
      host_response_time,
      propertyType,
      roomType,
      accomodates,
      bedrooms,
      bathrooms,
      price,
      cleanFee,
      cancelRental,
    };
    setRentals([...rentals, newUnit]);
    nav("/");
  }

  return (
    <div>
      <h1>Create a new rental</h1>
      <div>
        <form onSubmit={handleAddRental}>
          <label>
            Country:
            <input
              name="country"
              type="text"
              placeholder="Enter the country"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </label>
          <label>
            City:
            <input
              name="city"
              type="text"
              placeholder="Enter the city"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </label>
          <label>
            Neighbourhood:
            <input
              name="neighbourhood"
              type="text"
              placeholder="Enter the neighbourhood"
              value={neighbourhood}
              onChange={(event) => {
                setNeighbourhood(event.target.value);
              }}
            />
          </label>
          <label>
            Name:
            <input
              name="name"
              type="text"
              placeholder="Enter the name of the property"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <label>
            Description:
            <input
              name="description"
              type="text"
              placeholder="Enter a description of the property"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
          <label>
            House rules:
            <input
              name="house_rules"
              type="text"
              placeholder="Are there any house rules?"
              value={house_rules}
              onChange={(event) => {
                setHouseRules(event.target.value);
              }}
            />
          </label>
          <label>
            Hostname:
            <input
              name="host_name"
              type="text"
              placeholder="Your name as host"
              value={host_name}
              onChange={(event) => {
                setHostName(event.target.value);
              }}
            />
          </label>
          <label>
            Host since:
            <input
              name="host_since"
              type="date"
              value={host_since}
              onChange={(event) => {
                setHostSince(event.target.value);
              }}
            />
          </label>
          <label>
            Host response time:
            <input
              name="host_response_time"
              type="text"
              value={host_response_time}
              onChange={(event) => {
                setHostResponseTime(event.target.value);
              }}
            />
          </label>
          <label>
            Property type:
            <select
              name="property-type"
              value={propertyType}
              onChange={(event) => {
                setPropertyType(event.target.value);
              }}
            >
              <option value="Apartment">Apartment</option>
              <option value="Loft">Loft</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Room type:
            <select
              name="room-type"
              value={roomType}
              onChange={(event) => {
                setRoomType(event.target.value);
              }}
            >
              <option value="Entire home/apt">Entire home/apt</option>
              <option value="Private room">Private room</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            <input
              name="accomodates"
              type="number"
              value={accomodates}
              min={0}
              onChange={(event) => {
                setAccomodates(event.target.value);
              }}
            />
          </label>

          <label>
            <input
              name="bedrooms"
              type="number"
              value={bedrooms}
              min={0}
              onChange={(event) => {
                setBedrooms(event.target.value);
              }}
            />
          </label>

          <label>
            <input
              name="bathrooms"
              type="number"
              value={bathrooms}
              min={0}
              onChange={(event) => {
                setBathrooms(event.target.value);
              }}
            />
          </label>

          <label>
            <input
              name="price"
              type="number"
              value={price}
              min={0}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </label>

          <label>
            <input
              name="cleaning-fee"
              type="number"
              value={cleanFee}
              min={0}
              onChange={(event) => {
                setCleanFee(event.target.value);
              }}
            />
          </label>

          <label>
            Cancelation policy:
            <select
              name="cancel-rental"
              value={cancelRental}
              onChange={(event) => {
                setCancelRental(event.target.value);
              }}
            >
              <option value="strict">Strict</option>
              <option value="moderate">Moderate</option>
              <option value="flexible">Flexible</option>
            </select>
          </label>
          <label>
            Picture
            <input
              name="image"
              type="text"
              placeholder="Insert picture"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddRental;
