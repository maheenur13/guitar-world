import React, { useState } from 'react';
// import useForm from 'us'
import { useForm } from "react-hook-form";
import axios from 'axios';
// import UploadButton from '../UploadButton/UploadButton';
import './AddGuitarsInfo.css'

const AddGuitarInfo = () => {

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
      const url=`http://localhost:5059/addEvent`;
    //   console.log(formEventData);

      fetch(url,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formEventData)
      })
      .then(response =>console.log('server site ',response))
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
        <div style={{width:'70%',marginLeft:'auto',marginTop:'50px'}}>
            <form className="guitars-upload-form" onSubmit={handleSubmit(onSubmit)}>
         <div className="form-item-box">
            <label >Guitar Model: </label>
            <input style={{marginLeft:'8px'}} name="model" placeholder="Model name" ref={register} required/>
            
            <label style={{marginLeft:'8px'}}>Brand: </label>
            <input style={{marginLeft:'8px'}} name="brandName" placeholder="Brand Name" ref={register({ required: true })} />
        </div>
        <div className="form-item-box">
           <label>Guitar Price: </label>
            <input style={{marginLeft:'8px'}} name="price" placeholder="Price"ref={register({ required: true })} />
            <label style={{marginLeft:'8px'}}>Choose Picture: </label>
            <input  style={{width: '200px',fontSize: '15px',marginLeft:'8px'}} name="file" type="file" onChange={handleImageUpload} ref={register({ required: true })} /> 
            
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