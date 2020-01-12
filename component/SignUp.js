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

class SignUp extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emptyField: false,
    isLoading: false
  }

  inputHandler = (name, value) => {
    this.setState({
      [name]: value
    }, () => console.log("stae", this.state.password))
  }

  redirecToLogIn = () => {
    Router.push('/about')
  }

  signUpForm = (e) => {
    this.setState({
      isLoading: true
    })
    e.preventDefault();

    var data = {}
    data.first_name = this.state.firstName
    data.last_name = this.state.lastName
    data.email = this.state.email
    data.password = this.state.password
    if (this.state.firstName.trim() !== "" && this.state.lastName.trim() !== "" && this.state.email.trim() != "" && this.state.password.trim() !== "") {
      axios.post("https://api.for9a.com/u/register", data).then(res => {
        console.log(res)
        this.redirecToLogIn()
        this.setState({
          isLoading: false,
          emptyField: false
        })
      }).catch(err => {
        console.log(err)
      })
    } else {
      this.setState({
        emptyField: true,
        isLoading: false,
      })
    }
  }


  render() {
    return (
    
      <Container component="main" maxWidth="xs" style={{ marginTop: "5%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Grid container justify="flex-start">
            <Grid item xs={12} sm={6} style={{ minHeight: "50px" }}>
              {this.state.emptyField &&
                <div class="alert alert-info" role="alert" style={{ minHeight: "50px", margin: "0px",backgroundColor:"#339eba",color:"#fff" }}>
                  الرجاء ادخال كامل الحقول للمتابعه
              </div>
              }
            </Grid>
          </Grid>
          <Typography component="h1" variant="h4" style={{marginTop:"10px"}}>
            Sign up
          </Typography>
          <Avatar style={{ marginTop: "15px" }}>
            <LockOutlinedIcon />
          </Avatar>
          <form style={{ width: '100%', marginTop: "15px" }} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={() => { this.inputHandler("firstName", event.target.value) }}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={() => { this.inputHandler("lastName", event.target.value) }}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={() => { this.inputHandler("email", event.target.value) }}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={() => { this.inputHandler("password", event.target.value) }}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "10px" }}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              onClick={this.signUpForm}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{backgroundColor:"#eb751d"}}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item style={{ marginTop: "10px" }}>
                <Link href="/about">
                  Already have an account? Sign in
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
    );
  }
}

export default SignUp;
