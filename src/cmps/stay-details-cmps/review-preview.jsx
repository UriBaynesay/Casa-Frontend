export const ReviewPreview = ({ review, isReviewsExpanded }) => {
  return (
    <article key={review.by._id} className="review-card">
      <div className="writer-info-container">
        <div className="writer-img-container">
          <img src={review.by.imgUrl} alt="" />
        </div>
        <h4>{review.by.fullname}</h4>
      </div>
      <p
        style={
          isReviewsExpanded ? { height: "fit-content" } : { height: "72px" }
        }
      >
        {review.txt}
      </p>
    </article>
  )
}
