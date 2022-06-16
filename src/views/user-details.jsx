import { useDispatch } from "react-redux"
import { Link, Outlet, useNavigate,NavLink } from "react-router-dom"

import { onLogout } from "../store/action/user.action"
import { socketService } from "../services/socket.service"

export const UserDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    socketService.logout()
    dispatch(onLogout())
    navigate("/")
  }
  return (
    <main className="user-details main-layout">
      <div className="user-details-container">
        <div className="user-details-controls">
          <nav className="user-details-nav-container">
            <NavLink to="orders">
              <div className="icon-container">
                <img src={require("../assets/img/host/orders.png")} alt="" />
              </div>
              <span>Orders</span>
            </NavLink>
            <NavLink to="trips">
              <div className="icon-container">
                <img src={require("../assets/img/host/trips.png")} alt="" />
              </div>
              <span>Trips</span>
            </NavLink>
            <NavLink to="stays">
              <div className="icon-container">
                <img src={require("../assets/img/host/stay.png")} alt="" />
              </div>
              <span>Stays</span>
            </NavLink>
          </nav>
          <div className="log-out-btn" onClick={logout}>
            Logout
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  )
}
