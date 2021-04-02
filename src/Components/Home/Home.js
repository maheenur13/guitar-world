import React, { useEffect, useState } from 'react';
import Guitar from '../Guitar/Guitar';
import Spinner from '../Spinner/Spinner';
import './Home.css';
const Home = () => {
    const [guitars,setGuitars]= useState([]);
    useEffect(() =>{
        const url =`http://localhost:5059/guitars`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setGuitars(data))
    },[])
    const guitarContainerDesign={
        margin:'5px',
        display:'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        flexWrap:'wrap'
    }
    return (
        <div style={guitarContainerDesign}>
            {
                guitars.length===0 && <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <h3 className="text-blink">Data is Loading Please Wait...</h3>
                    <Spinner/>
                </div>
            }
            
          {
              
              guitars.map(guitar=> <Guitar key={guitar._id} guitar ={guitar} ></Guitar>)
              
          } 
          
        </div>
    );
};

export default Home;