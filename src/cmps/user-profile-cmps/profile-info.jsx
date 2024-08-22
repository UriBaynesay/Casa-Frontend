export const ProfileInfo = ({ user, stays }) => {
  const numOfReviews = stays.reduce((acc, stay) => {
    return acc + stay.reviews.length
  }, 0)

  let avgRating
  if (stays.length !== 0) {
    avgRating =
      stays.reduce((acc, stay) => {
        return acc + stay.reviewScores.rating
      }, 0) / stays.length
  }

  return (
    <section className="user-info-container">
      {user && (
        <div className="profile-details-container">
          <div className="profile-image-container">
            <img src={user.imgUrl} alt="" />
          </div>
          <h3>{user.fullname}</h3>
        </div>
      )}
      {stays.length && (
        <div className="profile-hosting-stats-container">
          <p>
            <span>{numOfReviews}</span> Reviews
          </p>
          <p>
            <span>{avgRating / 10}</span> Rating
          </p>
        </div>
      )}
    </section>
  )
}
