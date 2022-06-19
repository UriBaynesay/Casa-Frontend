import { useEffect, useState } from "react"
import { NavLink as Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { StaySearch } from "./stay-search.jsx"
import { setFilterBy } from "../store/action/stay.action"
import { updateUserNotification } from "../store/action/user.action"
import logoImg from "../assets/img/logo/new-logo.svg"
import logoImg2 from "../assets/img/logo/whitelogo.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

import {
  socketService,
  SOCKET_EVENT_NEW_ORDER,
} from "../services/socket.service"
import { showUserMsg } from "../services/event-bus.service"

export function AppHeader() {
  const { user } = useSelector((storeState) => storeState.userModule)
  const [headerLayoutClass, setHeaderLayoutClass] = useState("")
  const [headerClass, setHeaderClass] = useState("")
  const [img, setImg] = useState(logoImg2)

  let location = useLocation()
  const dispatch = useDispatch()

  const emitNewOrder = () => {
    showUserMsg("New order in your dashboard!")
    dispatch(updateUserNotification(true))
  }

  useEffect(() => {
    if (user) {
      socketService.login(user._id)
    }
    socketService.on(SOCKET_EVENT_NEW_ORDER, emitNewOrder)

    if (location.pathname === "/") {
      setHeaderLayoutClass("main-layout homepage")
      setHeaderClass("homepage")
      setImg(logoImg2)
    } else if (location.pathname.includes("stay/details")) {
      setHeaderLayoutClass("details-layout")
      setHeaderClass("")
      setImg(logoImg)
    } else if (location.pathname === "/stays") {
      setHeaderLayoutClass("main-layout stay-list")
      setHeaderClass("")
      setImg(logoImg)
    } else {
      setHeaderLayoutClass("main-layout")
      setHeaderClass("")
      setImg(logoImg)
    }
    return () => {
      socketService.off(SOCKET_EVENT_NEW_ORDER, emitNewOrder)
    }
  }, [location.pathname, user])

  return (
    <header className={`app-header ${headerLayoutClass}`}>
      <div className={`header-container ${headerClass}`}>
        <div className="logo-container">
          <img className="img-logo" src={img} alt="" />
          <Link to="/">
            <h1 className="text-logo">Casa</h1>
          </Link>
        </div>

        <StaySearch />

        <nav>
          <Link className="home" to="/">
            Home
          </Link>

          <Link
            className="explore"
            to="/stays"
            onClick={() => {
              dispatch(setFilterBy(null))
            }}
          >
            Explore
          </Link>

          <Link className="host" to="/host">
            Become a host
          </Link>

          {!user ? (
            <Link className="user" to="/login">
              <AccountCircleIcon />{" "}
            </Link>
          ) : (
            <Link className="user" to="/userdetails/orders">
              {user?.notification && <div className="notification"></div>}
              <img className="user-pic" src={user.imgUrl} alt="" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
