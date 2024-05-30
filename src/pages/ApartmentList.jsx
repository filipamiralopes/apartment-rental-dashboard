import ApartmentCard from '../components/ApartmentCard'

const ApartmentList = (props) => {

  const {rentals} = props

  return (
    <div>
        {rentals.map((unit)=>(
            <ApartmentCard key={unit.id} rental={unit} onDelete={props.handleDeleteUnit}/>
        ))}

    </div> 
  )
}

export default ApartmentList