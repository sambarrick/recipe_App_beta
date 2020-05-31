import React from "react";
import { Switch, Route, Redirect } from "react-router"
import cookie from "cookie"
import Login from "./containers/Login"
import Recipes from "./containers/Recipes";
import RecipeInfo from "./containers/RecipeInfo"

// Write checkAuth function here
// export const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// const AuthService = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// };

// const SecretRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthService.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/recipes' />
//   )} />
// );

// Write ProtectedRoute function here
// eslint-disable-next-line
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => checkAuth() 
//         ? <Component {...props} /> 
//         : <Redirect to="/login" />
//       }
//     />
//   )
// }

const Router = () => {
  return (
    <Switch>
     <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />

      <Route path="/recipes/:id" component={RecipeInfo} />
      <Route path="/recipes" component={Recipes} />
    </Switch>
  );
};

export default Router;
