import rentalsData from "../assets/rentals.json"
import ApartmentCard from './ApartmentCard'
import { useState } from "react"


const ApartmentList = () => {
    const [rentals, setRentals] = useState(rentalsData)
    const allRentals = rentals["results"]
    console.log("this is", allRentals)
    
    function handleDeleteUnit(unitId) { 
        const filteredRentals = allRentals.filter((rental) => {
          if(rental.id !== unitId){
            return true
          } 
        })
        setRentals(filteredRentals)
      }
  return (
    <div>
        {allRentals.map((unit)=>(
            <ApartmentCard key={unit.id} rental={unit} onDelete={handleDeleteUnit}/>
        ))}

    </div> 
  )
}

export default ApartmentList