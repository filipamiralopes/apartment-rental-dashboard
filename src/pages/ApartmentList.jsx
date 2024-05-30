import ApartmentCard from '../components/ApartmentCard'

const ApartmentList = (props) => {

  const {rentals} = props
    
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