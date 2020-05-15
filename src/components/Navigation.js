import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { checkAuth } from "../Router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative" className="nav-bar-color">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} id="fwr-header">
             <Link to="/recipes">Friends With Recipes</Link> 
          </Typography>
          <ul className="nav-list">
             <li className="nav-list-item">
            {!checkAuth() ? <Link to="/login">Login</Link> 
            : <NavigationLoggedIn />} 
  </li> 
      
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  )
}