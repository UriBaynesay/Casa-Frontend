import { useDispatch } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"

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
            <Link to="orders">Orders</Link>
            <Link to="trips">Trips</Link>
            <Link to="stays">Stays</Link>
          </nav>
          <div className="log-out-btn" onClick={logout}>
            Logout
          </div>
        </div>
        <Outlet/>
      </div>
    </main>
  )
}
