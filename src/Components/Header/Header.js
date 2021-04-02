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
      {name && <h6 className="active-user" ><span style={{padding: '2px 3px 2px 3px',borderRadius:'30px',backgroundColor:'#1DFF00',margin:'5px'}}></span>{name}</h6>}
        <Nav className="all-nav-items">
        
          <Link className="nav-item" to="/home" >Home</Link>
          <Link className="nav-item" to="/orders">Orders</Link>
          <Link className="nav-item" to="/admin" >Admins</Link>
          <Link className="nav-item" to="/deals" >Deals</Link>
          {name?<Link  style={{backgroundColor:'orange',color:'black',textAlign:'center'}} className="nav-item" to="/login" onClick={()=>setLoggedInUser({})}>Log Out</Link>:
          <Link className="nav-item" style={{backgroundColor:'red',textAlign:'center'}} to="/login">Login</Link>
          }
         

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;