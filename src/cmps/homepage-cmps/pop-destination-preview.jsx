export const PopDestinationPreview = ({ destination, onSetFilter }) => {
  return (
    <div className="card" onClick={() => onSetFilter(destination.city)}>
      <img src={destination.img} alt="" />
      <div className="city-details">
        <span className="town">{destination.city} </span>
        <span className="country">{destination.country}</span>
      </div>
    </div>
  )
}
