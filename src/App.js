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
  const auth0 = useContext(Auth0Context);

  return (
  
    <Provider store={store}>
      <BrowserRouter>
      <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Click Below!</h1>
          <button onClick={auth0.loginWithRedirect} className="button is-danger">
            Login
          </button>
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
