import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './AddGuitarsInfo.css'

const AddGuitarInfo = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
     const [imageUrl,setImageUrl]=useState(null);

  const onSubmit = data => {
      const formEventData = {
          model: data.model,
          price:data.price,
          brandName :data.brandName,
          imageUrl: imageUrl
      }
      console.log(formEventData);
      const url=`https://cherry-pudding-75552.herokuapp.com/addEvent`;
    //   console.log(formEventData);

      fetch(url,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formEventData)
      })
      .then(response =>{
          history.push('/manageguitars');
          history.push('/addguitar');
      })
    };

const handleImageUpload = event=>{
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key','2ad41eb0a6eb363e6e3ddec0c3f771a3');
    imageData.append('image',event.target.files[0]);
    console.log(event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
}


    return (
        <div style={{width:'80%',marginLeft:'auto',marginTop:'50px'}}>
            <form className="guitars-upload-form" onSubmit={handleSubmit(onSubmit)}>
         <div className="form-item-box">
             <div className="form-items-inside">
                <label className="inside-items" style={{margin:'auto'}} >Guitar Model: </label>
                <input className="inside-items" style={{marginLeft:'8px'}} name="model" placeholder="Model name" ref={register} required/>
            </div>
            <div className="form-items-inside">
            <label className="inside-items" style={{margin:'auto'}}>Brand: </label>
            <input className="inside-items" style={{marginLeft:'8px'}} name="brandName" placeholder="Brand Name" ref={register({ required: true })} />
            </div>
        </div>
        <div className="form-item-box">
            <div className="form-items-inside">
            <label className="inside-items" style={{margin:'auto'}}>Guitar Price: </label>
                <input className="inside-items" style={{marginLeft:'8px'}} name="price" placeholder="Price"ref={register({ required: true })} />
            </div>
        <div className="form-items-inside">
                <label className="inside-items" style={{marginLeft:'8px',margin:'auto'}}>Choose Picture: </label>
                <input className="inside-items"  style={{width: '200px',fontSize: '15px',marginLeft:'8px',border:'1px solid gray'}} name="file" type="file" onChange={handleImageUpload} ref={register({ required: true })} /> 
            </div>
            
        </div>
        <h6 style={{textAlign:'center',color:'red'}}>Please wait 3/4 seconds for upload the image into Imgbb and then click the submit button!</h6>
        <div style={{display: 'flex',justifyContent: 'center',margin:'10px'}}>
        <input style={{padding: '0px 15px 0px 15px'}} type="submit" />
        </div>
    </form>
        </div>
    );
};

export default AddGuitarInfo;