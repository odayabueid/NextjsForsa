import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { ClipLoader } from "react-spinners";

class LogIn extends Component {

  state = {
    email: "",
    password: "",
    emptyFieldLogin: false,
    isLoading: false
  }

  inputHandlerLogIn = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  redirecToJobsCards = () => {
    Router.push('/jobspage')
  }
  logInForm = (e) => {
    this.setState({
      isLoading: true
    })
    e.preventDefault();
    let data = {}
    data.first_name = this.state.email
    data.first_name = this.state.password
    if (this.state.email.trim() !== "" && this.state.password.trim() !== "") {
      axios.post("https://api.for9a.com/u/login", data).then(res => {
        this.redirecToJobsCards()
        localStorage.setItem('user_id', res.data.user.id)
        this.setState({
          isLoading: false,
          emptyFieldLogin: false
        })
      }).catch(err => {
        console.log(err)
      })
    } else {
      this.setState({
        emptyFieldLogin: true,
        isLoading: false,
      })
    }
  }
  render() {
    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "6%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Grid container justify="flex-start">
              <Grid item xs={12} sm={6} style={{ minHeight: "50px" }}>
                {this.state.emptyFieldLogin &&
                  <div class="alert alert-info" role="alert" style={{ minHeight: "50px", margin: "0px", backgroundColor: "#339eba", color: "#fff", borderRadius: "5px" }}>
                    <p style={{ padding: "16px 0px 0px 11px" }}>
                      الرجاء ادخال كامل الحقول للمتابعه
                  </p>
                  </div>
                }
              </Grid>
            </Grid>
            <Typography component="h1" variant="h4" >
              Log In
            </Typography>
            <Avatar style={{ marginTop: "15px" }}>
              <LockOutlinedIcon />
            </Avatar>
            <form style={{ width: "100%", marginTop: "15px" }} noValidate>
              <TextField
                onChange={() => { this.inputHandlerLogIn("email", event.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={() => { this.inputHandlerLogIn("password", event.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                style={{ marginBottom: "10px" }}
                label="Remember me"
              />
              <Button
                onClick={this.logInForm}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#eb751d" }}
              >
                Log In
            </Button>
              <Grid container>
                <Grid item xs style={{ marginTop: "15px" }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item style={{ marginTop: "15px" }}>
                  <Link href="/index">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
            <Grid container justify="center">
              <Grid item style={{ marginTop: "10px" }}>
                <ClipLoader color="#339eba" loading={this.state.isLoading} />
              </Grid>
            </Grid>
          </div>
        </Container>
    )
  }
}

export default LogIn