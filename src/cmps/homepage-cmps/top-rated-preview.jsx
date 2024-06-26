import { Link } from "react-router-dom"

export const TopRatedPreview = ({ stay }) => {
  return (
    <div className="card">
      <Link to={`/stay/details/${stay._id}`}>
        <img
          src={require(`../../assets/img/houses/${stay.imgUrls[0]}`)}
          alt=""
        />
        <div className="city-details">
          <span className="title">{stay.name} </span>
          <span className="street">{stay.address.street}</span>
        </div>
      </Link>
    </div>
  )
}
