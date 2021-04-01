import React from 'react';
import Button from '@material-ui/core/Button';
import './Guitar.css';
import { useHistory } from 'react-router';


const Guitar = (props) => {
    // console.log('guitars info',props.guitar);
    const history = useHistory();
    const { model, brandName, imageUrl, price,_id } = props.guitar
        const handleBuyClick=(id)=>{
            // console.log(id);
            const url =`/checkout/${model}/${id}`;
            history.push(url);
        }
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
                <Button onClick={()=>handleBuyClick(_id)} variant="outlined" color="secondary">
                    BUY
                </Button>
                
            </div>
        </div>
    );
};

export default Guitar;