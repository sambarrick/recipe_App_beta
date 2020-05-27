import React, { useContext } from 'react';
import "./App.css";
import Navigation from "./components/Navigation";
//import NavigationLoggedIn from './components/NavigationLoggedIn'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./redux/store";
import "./App.css";
import { Auth0Context } from './contexts/auth0-context'; 

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useContext( Auth0Context );

  return (
  
    <Provider store={store}>
      <BrowserRouter>
      <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
        {!isLoading && !user && (
          <div>
          <h1>Click Below!</h1>
          <button onClick={loginWithRedirect} className="button is-danger">
            Login
          </button>
          </div>
           )}
           {!isLoading && user && (
            <div>
              <h1>You are logged in!</h1>
              <p>Hello {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="button is-small is-dark"
              >
                Logout
          </button>
            </div>
          )}
        </div>
      </div>
    </div>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
