import React from "react"
import { Homepage } from "./views/Homepage"
import { StayExplore } from "./views/stay-explore"
import { HostPage } from "./views/host-page"
import { StayDetails } from "./views/stay-details"
import { StayEdit } from "./views/stay-edit"
import { Login } from "./views/login"
import { Signup } from "./views/signup"
import { UserTrips } from "./views/user-trips"
import { UserStays } from "./views/user-stays"
import { Logout } from "./views/logout"
import { UserOrders } from "./views/user-orders"
import { UserProfile } from "./views/user-profile"

const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/stays",
    component: <StayExplore />,
  },
  {
    path: "/host",
    component: <HostPage />,
  },
  {
    path: "/stay/details/:stayId",
    component: <StayDetails />,
  },
  {
    path: "/stay/edit",
    component: <StayEdit />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <Signup />,
  },
  {
    path: "user/profile/:userId",
    component: <UserProfile />,
  },
  { path: "user/trips", component: <UserTrips /> },
  { path: "user/orders", component: <UserOrders /> },
  { path: "user/stays", component: <UserStays /> },
  {
    path: "user/logout",
    component: <Logout />,
  },
]

export default routes
