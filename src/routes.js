import React from "react"
import { Homepage } from "./views/Homepage"
import { StayApp } from "./views/stay-app"
import { HostPage } from "./views/host-page"
import { StayDetails } from "./views/stay-details"
import { StayEdit } from "./views/stay-edit"
import { Login } from "./views/login"
import { Signup } from "./views/signup"
import { UserDetails } from "./views/user-details"
import { UserTrips } from "./cmps/user-trips"
import { UserOrders } from "./cmps/user-orders"
import { UserStays } from "./cmps/user-stays"

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "stays",
    component: <StayApp />,
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
      { path: "stays", component: <UserStays /> }
    ],
  },
]

export default routes
