import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setFilterBy } from "../../store/action/stay.action"
import { PopDestinationPreview } from "./pop-destination-preview"

export const PopDestinationList = ({ destinations }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSetFilter = (stayLocation) => {
    dispatch(setFilterBy({ stayLocation }))
    navigate("/stays")
  }

  return (
    <div className="cards-container">
      {destinations.map((destination, idx) => {
        return (
          <PopDestinationPreview
            destination={destination}
            onSetFilter={onSetFilter}
            key={idx}
          />
        )
      })}
    </div>
  )
}
