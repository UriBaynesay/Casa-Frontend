import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { SearchByDate } from "./stay-filter-search-dates"
import { AddGuestsFilter } from "./stay-search-addGuest-filter"
import { setFilterBy } from "../store/action/stay.action.js"

import SearchIcon from "@mui/icons-material/Search"

export const StaySearch = () => {
  const [layout, setLayout] = useState(null)
  // const [isSearchExpand, setSearchExpand] = useState(false)
  // const [currExpand, setExpand] = useState(null)
  // const [searchBy, setSearchBy] = useState({})
  // const dispatch = useDispatch()
  // let navigate = useNavigate()
  let location = useLocation()
  // const { filterBy } = useSelector((storeState) => storeState.stayModule)
  // console.log('filter by from state ', filterBy)
  // const onSetSearchLocation = (ev) => {
  //   ev.preventDefault()
  //   setSearchBy({ ...searchBy, stayLocation: ev.target.value })
  // }

  // const onQuickSearchByLocation = (stayLocation) => {
  //   dispatch(setFilterBy({ ...searchBy, stayLocation }))
  //   navigate("/stays")
  // }

  // const onSearch = (ev = null) => {
  //   if (ev) ev.preventDefault()
  //   dispatch(setFilterBy(searchBy))
  //   navigate("/stays")
  // }

  useEffect(() => {
    //close filter expand when moveing to another page
    // setSearchExpand(false)
    if (location.pathname === "/") {
      setLayout("homepage")
      // setSearchBy({})
      // document
      //   .querySelector(".main-container")
      //   .addEventListener("click", setSearchExpand(false))
    }
    return () => {
      // document.removeEventListener("click", setSearchExpand())
    }
  }, [location])

  // console.log(searchBy)
  return (
    <section className={`search-container ${layout}`}>
      <div className="input-container">
        <div className="location-container flex space-between">
          <div className="txt">
            <h4 className="title">Location</h4>
            <h4 className="description">Where are you going</h4>
          </div>
          <div className="separator"></div>
        </div>

        <div className="date-checkin-container flex space-between">
          <div className="txt">
            <h4 className="title">Check in</h4>
            <h4 className="description">Add dates</h4>
          </div>
          <div className="separator"></div>
        </div>

        <div className="date-checkout-container flex space-between">
          <div className="txt">
            <h4 className="title">Check out</h4>
            <h4 className="description">Add dates</h4>
          </div>
          <div className="separator"></div>
        </div>

        <div className="guests-container flex space-between">
          <div className="txt">
            <h4 className="title">Guests</h4>
            <h4 className="description">Add guests</h4>
          </div>
        </div>

        <div className="search-btn-container">
          <div className="search-btn">
            <SearchIcon htmlColor="#fff"/>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchByDestination(props) {
  const [region, setRegion] = useState("")
  useEffect(() => {
    if (region === "") return
    props.onQuickSearchByLocation(region)
  }, [region])
  return (
    <div className="destination-search-container">
      {/* <h4 className="destination-search-container-header">search by region</h4> */}
      <div className="regions-container">
        <Destination region={"Spain"} setRegion={setRegion} />
        <Destination region={"United States"} setRegion={setRegion} />
        <Destination region={"Canada"} setRegion={setRegion} />
        <Destination region={"Hong Kong"} setRegion={setRegion} />
        <Destination region={"Brazil"} setRegion={setRegion} />
        <Destination region={"Portugal"} setRegion={setRegion} />
      </div>
    </div>
  )
}
function Destination(props) {
  return (
    <div
      className="region-image-container"
      onClick={() => props.setRegion(props.region)}
    >
      <img
        src={require(`../assets/img/filter/${props.region}.png`)}
        alt=""
        className="region-image"
      />
      <p>{props.region}</p>
    </div>
  )
}
