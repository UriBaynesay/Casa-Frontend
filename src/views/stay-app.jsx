import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-list"
import { loadStays, setFilterBy } from "../store/action/stay.action"
import { StayAppFilter } from "../cmps/stay-app-filter.jsx"

export const StayApp = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const { filterBy } = useSelector((storeState) => storeState.stayModule)
  const [filterIconsOpen, setFilterIconsOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(loadStays())
  }, [filterBy])

  const onChangeFilter = (filterStaysBy) => {
    dispatch(setFilterBy(filterStaysBy))
    dispatch(loadStays())
  }

  const onToggleSideBar = () => {
    const elSideBar = document.querySelector(".icon-filters-container")
    elSideBar.style.display = filterIconsOpen ? "none" : "flex"
    setFilterIconsOpen(!filterIconsOpen)
  }

  return (
    <main className="main-layout">
      <div className="stay-app-container">
        <div className="filter-btn-container" onClick={onToggleSideBar}>
          <img src={require("../assets/img/Icons/filters.PNG")} alt="" />
        </div>
        <StayAppFilter onChangeFilter={onChangeFilter} />
        {stays && <StayList stays={stays} />}
      </div>
    </main>
  )
}
