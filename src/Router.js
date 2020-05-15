import React from "react";
import { Switch, Route, Redirect } from "react-router"
import cookie from "cookie"
import Login from "./containers/Login"
import Recipes from "./containers/Recipes";
import RecipeInfo from "./containers/RecipeInfo"
import Signup from "./containers/Signup"

// Write checkAuth function here
export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth() 
        ? <Component {...props} /> 
        : <Redirect to="/login" />
      }
    />
  )
}

const Router = () => {
  return (
    <Switch>
     <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipes/:id" component={RecipeInfo} />
    </Switch>
  );
};

export default Router;
