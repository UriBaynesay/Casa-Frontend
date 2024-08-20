import React from "react"
import { Homepage } from "./views/Homepage"
import { StayExplore } from "./views/stay-explore"
import { HostPage } from "./views/host-page"
import { StayDetails } from "./views/stay-details"
import { StayEdit } from "./views/stay-edit"
import { Login } from "./views/login"
import { Signup } from "./views/signup"
import { UserDetails } from "./views/user-details"
import { UserTrips } from "./cmps/user-details-cmps/user-trips"
import { UserOrders } from "./cmps/user-details-cmps/user-orders"
import { UserStays } from "./cmps/user-details-cmps/user-stays"
import { Logout } from "./views/logout"

const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "stays",
    component: <StayExplore />,
  },
  {
    path: "host",
    component: <HostPage />,
  },
  {
    path: "stay/details/:stayId",
    component: <StayDetails />,
  },
  {
    path: "stay/edit",
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
    path: "userdetails",
    component: <UserDetails />,
    nestedRoutes: [
      { path: "trips", component: <UserTrips /> },
      { path: "orders", component: <UserOrders /> },
      { path: "stays", component: <UserStays /> },
    ],
  },
  {
    path: "/logout",
    component: <Logout/>,
  },
]

export default routes
