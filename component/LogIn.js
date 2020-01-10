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

class LogIn extends Component {

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography component="h1" variant="h4">
            Log In
            </Typography>
          <Avatar style={{ marginTop: "15px" }}>
            <LockOutlinedIcon />
          </Avatar>
          <form style={{ width: "100%", marginTop: "15px" }} noValidate>
            <TextField
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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

        </div>
      </Container>
    )
  }
}

export default LogIn