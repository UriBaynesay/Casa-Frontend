import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { SearchModal } from "./search-modal"
import { AddGuestsFilter } from "./stay-search-addGuest-filter"
import { setFilterBy } from "../store/action/stay.action.js"

import SearchIcon from "@mui/icons-material/Search"

export const StaySearch = () => {
  const [layout, setLayout] = useState(null)
  // const [searchBy, setSearchBy] = useState({})
  const [openModal, setOpenModal] = useState(null)
  const {filterBy}=useSelector(storeState=>storeState.stayModule)
  let location = useLocation()
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const onOpenModal = (modal) => {
    setOpenModal(modal)
  }
  // const [isSearchExpand, setSearchExpand] = useState(false)
  // const [currExpand, setExpand] = useState(null)
  // const [searchBy, setSearchBy] = useState({})

  
  // const { filterBy } = useSelector((storeState) => storeState.stayModule)
  // console.log('filter by from state ', filterBy)
  // const onSetSearchLocation = (ev) => {
  //   ev.preventDefault()
  //   setSearchBy({ ...searchBy, stayLocation: ev.target.value })
  // }

  const onSetFilter = (value, name) => {
    // setSearchBy({ ...searchBy, [name]: value })
    dispatch(setFilterBy({[name]:value}))
    setOpenModal(null)
  }

  // const onQuickSearchByLocation = (stayLocation) => {
  //   dispatch(setFilterBy({ ...searchBy, stayLocation }))
  //   navigate("/stays")
  // }

  const onSearch = (ev = null) => {
    if (ev) ev.preventDefault()
    // setSearchBy({})
    navigate("/stays")
  }

  useEffect(() => {
    if(location.pathname!=="/stays") dispatch(setFilterBy(null))
    if (location.pathname === "/") {
      setLayout("homepage")
    }

  }, [location])

  // console.log(searchBy)
  return (
    <section className={`search-container ${layout}`}>
      <div className="input-container">
        <div className="location-container flex space-between">
          <div className="txt" onClick={() => onOpenModal("location")}>
            <h4 className="title">Location</h4>
            {/* <h4 className="description">Where are you going</h4> */}
            <input
              type="text"
              name="stayLocation"
              value={filterBy?.stayLocation ? filterBy.stayLocation : ""}
              placeholder="Where are you going"
              onChange={(ev) => onSetFilter(ev.target.value, ev.target.name)}
            />
          </div>
          <div className="separator"></div>
        </div>

        <div className="date-checkin-container flex space-between">
          <div className="txt" onClick={() => onOpenModal("date")}>
            <h4 className="title">Check in</h4>
            <h4 className="description">Add dates</h4>
          </div>
          <div className="separator"></div>
        </div>

        <div className="date-checkout-container flex space-between">
          <div className="txt" onClick={() => onOpenModal("date")}>
            <h4 className="title">Check out</h4>
            <h4 className="description">Add dates</h4>
          </div>
          <div className="separator"></div>
        </div>

        <div className="guests-container flex space-between">
          <div className="txt" onClick={() => onOpenModal("guests")}>
            <h4 className="title">Guests</h4>
            <h4 className="description">Add guests</h4>
          </div>
        </div>

        <div className="search-btn-container">
          <div className="search-btn" onClick={() => onSearch()}>
            <SearchIcon htmlColor="#fff" />
          </div>
        </div>
      </div>
      <div className="modal-container">
        {openModal && (
          <SearchModal modal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </section>
  )
}
