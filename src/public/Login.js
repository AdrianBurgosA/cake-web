import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import axios from 'axios'

const Login = () => {
  const theme = createTheme();
  const [userRequest, setUserRequest] = useState({username: '', password:''})
  const [showAlert, setShowAlert] = useState(true)
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8081/api/endpoints/login',userRequest)
      .then(res => {
        setUserRequest({username: '', password:''})
        localStorage.setItem('token', res.token)
        navigate('/products')
      })
      .catch(err => {
        setShowAlert(false)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvaXNzYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                value={userRequest.username}
                onChange = {(event) => setUserRequest({...userRequest,username: event.target.value})}
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
                value={userRequest.password}
                onChange={(event) => setUserRequest({...userRequest,password:event.target.value})}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to='/register'>
                    {"Don't have an account? Register now"}
                  </Link>
                </Grid>
              </Grid>
              {
                showAlert
                ? <></>
                : <Alert severity="error">Wrong Credentials!</Alert>
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login;