import { useState } from "react"
import starIcon from "../assets/img/svgs/star.svg"

export const StayReview = ({ reviewScores, reviews }) => {

  const [isReviewsExpanded, setIsReviewsExpanded] = useState(false)
  
  return (
    <section className="reviews-container">
      <h1>
        <img width="14px" src={starIcon} alt="" />{" "}
        {(reviewScores.rating / 100).toFixed(1) * 5} · {reviews.length} reviews
      </h1>
      <div className="rating-breakdown">
        <h4 className="cleanliness">Cleanliness </h4>
        <div className="meter-container c-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.cleanliness / 2}</span>
        </div>
        <h4 className="communication">Communication </h4>
        <div className="meter-container communi-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.communication / 2}</span>
        </div>
        <h4 className="check-in">Check-in </h4>
        <div className="meter-container checkin-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.checkin / 2}</span>
        </div>
        <h4 className="accuracy">Accuracy </h4>
        <div className="meter-container acc-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.accuracy / 2}</span>
        </div>
        <h4 className="location">Location </h4>
        <div className="meter-container loc-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.location / 2}</span>
        </div>
        <h4 className="value">Value </h4>
        <div className="meter-container val-review">
          <meter max="5" value={reviewScores.value / 2}></meter>
          <span>{reviewScores.value / 2}</span>
        </div>
      </div>

      <div
        className="review-cards-container"
        style={isReviewsExpanded ? { maxHeight: "fit-content" } : null}
      >
        {reviews.map((review) => {
          return (
            <div key={review.by._id} className="review-card">
              <div className="writer-info-container">
                <div className="writer-img-container">
                  <img src={review.by.imgUrl} alt="" />
                </div>
                <h3>{review.by.fullname}</h3>
              </div>
              <p
                style={
                  isReviewsExpanded
                    ? { height: "fit-content" }
                    : { height: "72px" }
                }
              >
                {review.txt}
              </p>
            </div>
          )
        })}
      </div>
      <div
        className="reviews-btn"
        onClick={() => {
          setIsReviewsExpanded(!isReviewsExpanded)
        }}
      >
        <h3>{isReviewsExpanded ? "Show less" : "Show more"}</h3>
      </div>
    </section>
  )
}
