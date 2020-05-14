import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from'./Router'
import store from './redux/store'


import './App.css';

function App() {
 
  return (
   

    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Router />
      </BrowserRouter>
      </Provider>
   
  );
}

export default App;