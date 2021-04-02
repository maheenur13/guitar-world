import React, { useEffect, useState,useContext } from 'react';
import {userContext} from '../../App';
import './Orders.css';
import Spinner from '../Spinner/Spinner';


const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const [items,setItem]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5059/allorder?email=${loggedInUser.email}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    var count=0;
// console.log(items[0].email);
    // const {model,price,brandName,imageUrl}=singleData;
    // console.log(email)
    if(items.length>0){
        return (
            <div>
                <h3 className="email-design">Your Email : {items[0]?.email}</h3>
                <hr></hr>
                <h6 style={{textAlign:'center'}}>Your Ordered Items</h6>
                <hr></hr>
                <div className="tableHead">
                    <h5>SL</h5>
                    <h5>Model</h5>
                    <h5>Brand Name</h5>
                    <h5>Price</h5>
                    <h5>Buying Date</h5>
                </div>
                {
                   
                   items.length===0 && <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                   <Spinner/>
               </div>
           
                }
                {
                  items.map(item=>  {
                        const orderedItems=item.singleData;
                        // console.log(item.singleData);
                        count++;
                        console.log(item);
                        if(item!==null){
                            return(
                                <div className="tableRows">
                                  <h6>{count}</h6>
                                  <h6> {orderedItems.model}</h6>
                                  <h6> {orderedItems.brandName}</h6>
                                  <h6>{orderedItems.price}$</h6>
                                  <h6>{orderedItems.buyDate}</h6>
      
                              </div>
                          )
                        }
                        else{
                            return(
                                <Spinner/>
                            )
                        }
                        
                        
                    })
                    
                }
                
                
            </div>
        );
    }
    else{
        return(
            <div>
                <h3 className="order-zero">You Have No Order!</h3>
            </div>
        )
    }
    
};

export default Orders;