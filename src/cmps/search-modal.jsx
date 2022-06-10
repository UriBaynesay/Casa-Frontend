

import { LocationModal } from "./search-by-location-modal"
import { SearchByDate } from "./stay-filter-search-dates"
import { GuestModal } from "./search-by-guest-modal";

export const SearchModal = ({ modal, onSetFilter }) => {
  const onSetDates = () => {}

  if (modal === "location") {
    return <LocationModal onSetFilter={onSetFilter} />
  }
  if (modal === "date") {
    return (
      <div className="date-modal">
        <SearchByDate onSetDates={onSetDates} />
      </div>
    )
  }
  if (modal === "guests") {
    return <GuestModal onSetFilter={onSetFilter} />
  }
}
