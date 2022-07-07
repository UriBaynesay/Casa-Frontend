import { userService } from "../../services/user.service"
import { showUserMsg } from "../../services/event-bus.service"

export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials)
      dispatch({
        type: "SET_USER",
        user,
      })
    } catch (err) {
      showUserMsg(err.data)
    }
  }
}

export function onLogout() {
  return async (dispatch) => {
    await userService.logout()
    dispatch({
      type: "SET_USER",
      user: null,
    })
  }
}

export function onSignup(newUser) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(newUser)
      dispatch({
        type: "SET_USER",
        user
      })
    } catch (error) {
      showUserMsg(error)
    }
  }
}

export function updateUserNotification(hasNotification) {
  return async (dispatch) => {
    try {
      const user = userService.setNotification(hasNotification)
      dispatch({
        type: "SET_USER",
        user: user,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
