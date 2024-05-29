import rentalsData from "../assets/rentals.json"
import ApartmentCard from './ApartmentCard'
import { useState } from "react"


const ApartmentList = () => {
    const [rentals, setRentals] = useState(rentalsData.results)
    
    function handleDeleteUnit(unitId) { 
        const filteredRentals = rentals.filter((rental) => {
          if(rental.id !== unitId){
            return true
          } 
        })
        setRentals(filteredRentals)
      }
  return (
    <div>
        {rentals.map((unit)=>(
            <ApartmentCard key={unit.id} rental={unit} onDelete={handleDeleteUnit}/>
        ))}

    </div> 
  )
}

export default ApartmentList