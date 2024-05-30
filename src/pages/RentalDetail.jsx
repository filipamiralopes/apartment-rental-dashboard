import React from 'react'
import { useParams } from "react-router-dom";

const RentalDetail = (props) => {
  const {rentals} = props
  const { rentalId } = useParams();
  const filteredRentals = rentals.find((unit) => {
    if (unit.id == rentalId) {
      return true;
    }
  });

  return (
    <div>{filteredRentals.name}</div>
  )
}

export default RentalDetail