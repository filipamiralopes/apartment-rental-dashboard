
const ApartmentCard = ({rental, onDelete}) => {
  return (
    <div key={rental.id} className="rental-unit">
    <img src={rental.picture_url.url} />

    <div className="unit-description">
      <h4>
        {rental.name} 
      </h4>
      {/* <p><i>{rental.space}</i></p> */}
      <p>
        <b>Price: </b>
        {rental.price}€
      </p>
      <div className="labels">
        {rental.price <= 85 ? (
          <p className="green-label">Great Deal</p>
        ) : rental.price >= 150 ? (
          <p className="blue-label">Premium</p>
        ) : (
          <p></p>
        )}
        {rental.review_scores_rating > 90 ? <p className="blue-label">Super Host!</p> : <p></p>}
      </div>
      <button onClick={()=>{onDelete(rental.id)}}>Delete</button>
    </div>
  </div>
  )
}

export default ApartmentCard