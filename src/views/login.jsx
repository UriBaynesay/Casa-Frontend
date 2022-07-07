import { useDispatch, useSelector } from "react-redux"

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Link, useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { onLogin } from "../store/action/user.action.js"
import { useEffect } from "react"

const theme = createTheme()

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedInUser = useSelector((storeState) => storeState.userModule.user)

  useEffect(() => {
    if (loggedInUser) navigate("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const data = new FormData(ev.currentTarget)
    const credentials = {
      username: data.get("username"),
      password: data.get("password"),
    }
    dispatch(onLogin(credentials))
  }

  return (
    <main className="login-page main-layout">
      <section className="login-container">
        <ThemeProvider theme={theme}>
          <Container component="div" maxWidth="xs">
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={(event) => handleSubmit(event)}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username "
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </section>
    </main>
  )
}
