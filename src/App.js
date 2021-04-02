import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import React, { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout'
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';

export const userContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState([]); 
  return (
   <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
       <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
           <Admin/>
          
          </PrivateRoute>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
           <Login></Login>
           
          </Route>
          <PrivateRoute path="/checkout/:model/:id">
           <Checkout></Checkout>
           
          </PrivateRoute>
          
        </Switch>
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
