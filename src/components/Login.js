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
import { useAuth0 } from '../contexts/auth0-context'

export default function Login() {

  const { loginWithRedirect } = useAuth0();

    return (
      <Container className="App" maxWidth="sm">
        <form className="login-form">
          <Avatar className="avatar">
            <RestaurantIcon />
          </Avatar>
          <br />
          <p className="welcome">Welcome!</p> 
          <p className="please-log-in">Please log in to view your recipes</p>

          <Button
          onClick={loginWithRedirect}
            className="login-button"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Container>
    );
    
  }