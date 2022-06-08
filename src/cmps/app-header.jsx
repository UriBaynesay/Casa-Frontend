import { useEffect, useState } from "react"
import { NavLink as Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { StaySearch } from "./stay-search.jsx"
import { setFilterBy } from "../store/action/stay.action"
import logoImg from "../assets/img/logo/new-logo.svg"
import logoImg2 from "../assets/img/logo/whitelogo.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { userService } from "../services/user.service"
import {
  socketService,
  SOCKET_EVENT_NEW_ORDER,
} from "../services/socket.service"
import { showUserMsg } from "../services/event-bus.service"

export function AppHeader() {
  const [user, setUser] = useState(userService.getLoggedinUser())
  const [headerClass, setHeaderClass] = useState("")
  const [img, setImg] = useState(logoImg2)
  let location = useLocation()
  const dispatch = useDispatch()

  const emitNewOrder = () => {
    showUserMsg("New order in your dashboard!")
    setUser(userService.setNotification(true))
  }

  useEffect(() => {
    if (user) {
      socketService.login(user._id)
    }

    socketService.on(SOCKET_EVENT_NEW_ORDER, emitNewOrder)

    if (location.pathname === "/") {
      setHeaderClass("homepage")
      setImg(logoImg2)
    } else if (location.pathname.includes("details")) {
      setHeaderClass("stay-details")
      setImg(logoImg)
    } else {
      setHeaderClass("")
      setImg(logoImg)
    }
  }, [location.pathname, user])

  return (
    <header className={`app-header ${headerClass}`}>
      <div className="logo-container">
        <img className="img-logo" src={img} alt="" />
        <Link to="/">
          <h1 className="text-logo">Casa</h1>
        </Link>
      </div>

      <StaySearch />

      <nav>
        <Link
          className="explore"
          to="/stays"
          onClick={() => {
            dispatch(setFilterBy(null))
          }}
        >
          Explore
        </Link>
        {user ? (
          <Link className="host" to="/dashboard">
            Host Dashboard
          </Link>
        ) : (
          <Link className="host" to="/host">
            Become a host
          </Link>
        )}

        {!user ? (
          <Link className="user" to="/login">
            <AccountCircleIcon />{" "}
          </Link>
        ) : (
          <Link className="user" to="/userdashboard">
            {user?.notification && <div className="notification"></div>}
            <img className="user-pic" src={user.imgUrl} alt="" />
          </Link>
        )}
      </nav>
    </header>
  )
}
