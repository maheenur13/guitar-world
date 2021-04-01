import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [items,setItem]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5059/singleuser`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return (
        <div>
            <h1>{items.length}</h1>
        </div>
    );
};

export default Orders;