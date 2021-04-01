import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Header.css';
import {userContext} from '../../App';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const {name,photoURL}= loggedInUser;
    console.log('logged in user',loggedInUser);
    console.log(name);
  return (

    <Navbar fixed="top" collapseOnSelect expand="lg" className="nav-design" variant="dark">
      <Link className="Brand-logo" to="/">GUITAR WORLD</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="all-nav-items">
          <Link className="nav-item" to="/home" >Home</Link>
          <Link className="nav-item" to="/orders">Orders</Link>
          <Link className="nav-item" to="/admin" >Admins</Link>
          <Link className="nav-item" to="/deals" >Deals</Link>
          {name?<Link  style={{backgroundColor:'orange',color:'black'}} className="nav-item" to="/login" onClick={()=>setLoggedInUser({})}>Log Out</Link>:
          <Link className="nav-item" style={{backgroundColor:'red'}} to="/login">Login</Link>
          }
         {name && <h6 style={{fontSize:'12px',color:'white',display:'flex',justifyContent:'center',alignContent:'center',marginTop:'10px'}}>{name}</h6>}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;