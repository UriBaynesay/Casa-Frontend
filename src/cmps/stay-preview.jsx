import { Link } from "react-router-dom"
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.css"
import { Carousel } from "react-responsive-carousel"
import starIcon from "../assets/img/svgs/star.svg"
function numberWithCommas(n) {
  var parts = n.toString().split(".")
  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (parts[1] ? "." + parts[1] : "")
  )
}

// import pictures from '../assets/img/houses'
export function StayPreview({ stay }) {
  // console.log(pictures)
  const calculatedStay = ((stay.reviewScores.rating / 100) * 5).toFixed(2)

  return (
    <Link to={`/stay/details/${stay._id}`} className="stay-preview-container">
      <div className="stay-img-container">
        <Carousel showThumbs={false} showArrows={true} showStatus={false}>
          <div>
            <img
              src={require(`../assets/img/houses/${stay.imgUrls[0]}`)}
              alt=""
            />
          </div>
          <div>
            <img
              src={require(`../assets/img/houses/${stay.imgUrls[1]}`)}
              alt=""
            />
          </div>
          <div>
            <img
              src={require(`../assets/img/houses/${stay.imgUrls[2]}`)}
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <span className="top-summary">
        <span className="stay-address">{stay.address.street} </span>
        <span className="star-rating">
          {calculatedStay} <img width="14px" src={starIcon}></img>
        </span>
      </span>
      <div className="stay-quick-data">{stay.propertyType}</div>
      <div className="stay-quick-data">{stay.roomType}</div>
      <div className="stay-price">
        <span className="stay-price">${numberWithCommas(stay.price)}</span>{" "}
        <span className="stay-night">night</span>
      </div>

      {/* <Link to={`/stay/edit/${stay.id}`}>
                <div className='edit-stay-btn'></div>
            </Link> */}
    </Link>
  )
}
