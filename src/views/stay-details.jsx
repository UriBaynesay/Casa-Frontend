import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { stayService } from "../services/stay.service"
import { StayInfo } from "../cmps/stay-info"
import { Reserve } from "../cmps/stay-reserve"
import { StayReview } from "../cmps/stay-review"
import { Map } from "../cmps/map"
import { StayTitleInfo } from "../cmps/stay-details-title-info"
import { StayImgs } from "../cmps/stay-imgs"
import { AddReview } from "../cmps/add-review"
import { showUserMsg } from "../services/event-bus.service"

export const StayDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { user } = useSelector((storeState) => storeState.userModule)
  const [stay, setStay] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    loadStay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadStay = async () => {
    try {
      const foundStay = await stayService.getById(params.stayId)
      setStay(foundStay)
    } catch (err) {
      showUserMsg(err)
      navigate(-1)
    }
  }
  

  return (
    <main className="details-layout">
      {stay ? (
        <section className="stay-details-container">
          <StayTitleInfo
            name={stay.name}
            reviewScores={stay.reviewScores}
            host={stay.host}
            reviews={stay.reviews}
            address={stay.address}
          />

          <StayImgs imgUrls={stay.imgUrls} />

          <section className="info-reserve">
            <StayInfo stay={stay} />
            <Reserve
              stayId={stay._id}
              price={stay.price}
              numOfGuest={stay.capacity}
              hostId={stay.host["_id"]}
              rating={stay.reviewScores.rating}
              reviewsLength={stay.reviews.length}
            />
          </section>

          <StayReview reviewScores={stay.reviewScores} reviews={stay.reviews} />

          <AddReview  loggedinUser={user} />

          <Map
            center={{
              lng: stay.address.location.lat,
              lat: stay.address.location.lan,
            }}
          />
        </section>
      ) : (
        <div></div>
      )}
    </main>
  )
}
