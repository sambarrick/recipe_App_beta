
import React, { Component } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import RestaurantIcon from "@material-ui/icons/Restaurant";

class App extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    // set cookie here
    document.cookie = "loggedIn=true;max-age=60*2000";
    window.location.replace("/recipes");
  };

  render() {
    return (
      <Container className="App" maxWidth="sm">
        <form className="login-form" onSubmit={this.login}>
          <Avatar className="avatar">
            <RestaurantIcon />
          </Avatar>
          <br />
          <Typography className="login-header" component="h1" variant="h5">
            Log In
          </Typography>
          <br />
          <p className="welcome">Welcome!</p> 
          <p className="please-log-in">Please log in to view your recipes</p>
          <TextField
            className="textfield-login-component"
            required
            onChange={this.handleTextChange}
            value={this.state.email}
            variant="outlined"
            name="email"
            label="Email"
            type="text"
            autoFocus
          />
          <br />
          <TextField
            className="textfield-login-component"
            required
            onChange={this.handleTextChange}
            value={this.state.password}
            variant="outlined"
            name="password"
            label="Password"
            type="password"
          />
          <br />
          <Button
            className="login-button"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            // onClick. Since this is a class based component, props are
            // passed automatically but you need to reference "this"
            // to make it work
          >
            Login
          </Button>
          <br />
          <Grid container>
            <Grid item xs>
              <Link to="/signup" className="forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" className="no-password" variant="body2">
                No account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default App;