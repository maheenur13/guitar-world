import React from 'react';
import Button from '@material-ui/core/Button';
import './Guitar.css';
import { useHistory } from 'react-router';


const Guitar = (props) => {
    const history = useHistory();
    const { model, brandName, imageUrl, price, _id } = props.guitar
    const handleBuyClick = (id) => {
        const url = `/checkout/${model}/${id}`;
        history.push(url);
    }
    return (
        <div className="guitar-container">
            <div className="first-box">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '30%' }} src={imageUrl} alt=""></img>
                </div>
                <div style={{ margin: '10px 0px 10px 0px' }}>
                    <h4 style={{ textAlign: 'center' }}>Brand: {brandName}</h4>
                    <h5 style={{ textAlign: 'center' }}>Model: {model}</h5>

                </div>
            </div>
            <div className="second-box" style={{}}>
                <h4 style={{ color: '#FA1690' }}>
                    ${price}
                </h4>
                <Button onClick={() => handleBuyClick(_id)} variant="contained" color="secondary">
                    BUY
                </Button>

            </div>
        </div>
    );
};

export default Guitar;