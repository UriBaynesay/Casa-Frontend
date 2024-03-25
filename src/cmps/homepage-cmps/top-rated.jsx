import { stayService } from "../../services/stay.service"
import { TopRatedList } from "./top-rated-list"

export function TopRated() {
  const stays=stayService.getTopRated()

  return (
    <section className="top-rated main-layout">
      {stays ? (
        <div className="top-rated-container">
          <h1 className="title">Top Rated</h1>
          <TopRatedList stays={stays} />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
