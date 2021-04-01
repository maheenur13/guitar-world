import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Guitar.css';
const Guitar = (props) => {
    console.log(props.guitar);
    const { model, brandName, imageUrl, price } = props.guitar
    return (
        <div className="guitar-container">
            
            <div style={{ width: '100%',display:'flex',justifyContent:'center' }}>
                <img style={{ width: '40%'}} src={imageUrl} alt=""></img>
            </div>
            <div style={{ margin: '10px 0px 10px 0px' }}>
                <h4 style={{textAlign:'center'}}>Brand: {brandName}</h4>
                <h5 style={{textAlign:'center'}}>Model: {model}</h5>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '15px 6px 15px 6px' }}>
                <h3 style={{ color: '#FA1690' }}>
                    ${price}
                </h3>
               <Link to="/checkout"> <Button variant="outlined" color="secondary">
                    BUY
                </Button>
                </Link>
            </div>
        </div>
    );
};

export default Guitar;