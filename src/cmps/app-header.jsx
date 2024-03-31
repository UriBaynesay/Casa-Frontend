import { useEffect } from "react"
import { NavLink as Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { StaySearch } from "./header-cmps/stay-search.jsx"
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

export const AppHeader = ({ theme }) => {
  const { user } = useSelector((storeState) => storeState.userModule)
  let headerLayoutClass, headerClass, img
  switch (theme) {
    case "homepage":
      headerLayoutClass = "main-layout homepage"
      headerClass = "homepage"
      img = logoImg2
      break
    case "stay-explore":
      headerLayoutClass = "main-layout stay-list"
      headerClass = ""
      img = logoImg
      break
    case "stay-details":
      headerLayoutClass = "details-layout"
      headerClass = ""
      img = logoImg
      break
    default:
      headerLayoutClass = "main-layout"
      headerClass = ""
      img = logoImg
  }

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

    return () => {
      socketService.off(SOCKET_EVENT_NEW_ORDER, emitNewOrder)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

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
