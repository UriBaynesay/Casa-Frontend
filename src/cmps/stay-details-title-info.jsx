import starIcon from "../assets/img/svgs/star.svg"

export const StayTitleInfo = ({
  name,
  reviewScores,
  host,
  reviews,
  address,
}) => {
  return (
    <div className="stay-title-info-container">
      <h1 className="stay-name">{name}</h1>
      <div className="short-desc">
        <div className="stats">
          <span>
            <img width="14px" src={starIcon} alt="" />{" "}
            {(reviewScores.rating / 100).toFixed(1) * 5} ·
          </span>
          <span className="reviews"> {reviews.length} reviews</span>
          <span className="seperate-dott">·</span>
          {host.isSuperhost && (
            <span className="super-host">
              Superhost
              <span className="seperate-dott">·</span>
            </span>
          )}
          <span className="address">{address.street}</span>
        </div>
        <div className="quick-actions">
          <div className="share-btn">
            <img src={require("../assets/img/Icons/upload.png")} alt="" />
            Share
          </div>
          <div className="save-btn">
            <img src={require("../assets/img/Icons/save.png")} alt="" />
            Save
          </div>
        </div>
      </div>
    </div>
  )
}
