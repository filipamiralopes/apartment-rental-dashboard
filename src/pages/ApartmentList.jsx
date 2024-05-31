import ApartmentCard from '../components/ApartmentCard'

const ApartmentList = (props) => {

  const {rentals} = props

  return (
    <div className="apartment-list">
      <button id="add-property-btn">Add Property</button>
        {rentals.map((unit)=>(
            <ApartmentCard key={unit.id} rental={unit} onDelete={props.handleDeleteUnit}/>
        ))}

    </div> 
  )
}

export default ApartmentList