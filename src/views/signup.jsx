import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { onSignup } from "../store/action/user.action.js"
import { SignupForm } from "../cmps/signup-cmps/signup-form.jsx"

export const Signup = () => {
  const dispatch = useDispatch()
  const loggedInUser = useSelector((storeState) => storeState.userModule.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (loggedInUser) navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const firstName = data.get("firstName")
    const lastName = data.get("lastName")
    const user = {
      username: data.get("username"),
      fullname: firstName + " " + lastName,
      password: data.get("password"),
    }
    dispatch(onSignup(user))
  }

  return (
    <main className="signup-page main-layout">
      <section className="signup-container">
        <SignupForm handleSubmit={handleSubmit} />
      </section>
    </main>
  )
}
