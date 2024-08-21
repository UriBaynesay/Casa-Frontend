import { Link } from "react-router-dom"

export const UserDetailsNavModal = () => {
    const menuOptions = ["Details", "Stays", "Orders", "Trips", "Logout"]
  return <div className="user-nav-menu-modal">
    {menuOptions.map(option=><Link to={`/user/${option.toLowerCase()}`} key={option}>{option}</Link>)}
  </div>
}
