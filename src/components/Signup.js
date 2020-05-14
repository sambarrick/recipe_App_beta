import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup(props) {
  const classes = useStyles();

  //hook below this line. essentially same as a class component
  //useState states default value
  //setFirst_name updates the value based on what you type

  const [first_name, setFirst_name] = useState('');

  const [last_name, setLast_name] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const user = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };



  console.log("field updated", user);

  return (
    <div className="signup-component">
      <Container
        className="signup-component-container" 
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} id="signup-restaurant-icon">
            <RestaurantIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={() => props.addUser(user)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  onChange={(e) => setFirst_name(e.target.value)}
                  value={first_name}
                  name="first_name"
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
                  variant="outlined"
                  required
                  onChange={(e) => setLast_name(e.target.value)}
                  value={last_name}
                  name="last_name"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  value={email}
                  name="email"
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Link to="/success">
              <Button
                type="submit"
                fullWidth
                id="signup-button"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              </Link>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  className="already-have-an-account"
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
