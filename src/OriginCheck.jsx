import React, { useState } from "react";
import Axios from "axios";
import {useFormik} from 'formik'
const abbreviations = require('../data/countryAbbre.js')


export default function OriginCheck({ country, addToData }) {
    const [canPost, setCanPost] = useState(false);
    const [search, setSearch] = useState('');
    const formik = useFormik({
      initialValues:{
        "name":'',
        "photo":''
      },
      onSubmit: (values)=>{
        console.log(values)
        addToData(values, country)


      }
    })
    const checkLanguage = (text, country)=>{
       Axios.post('/detectLanguage', {
           q:text
       }).then(({data})=>{
           
           console.log(data.detections[0].language, abbreviations[data.detections[0].language], country)
           if(abbreviations[data.detections[0].language]===country){
               setCanPost(true)
           } else{
               alert('WRONG LANGUAGE')
           }
       
       }).catch((err)=>{
           console.log(err)
       })
    }

    
 
  return (
    <div className="originCheck">
      <p>Post a dish for {country}</p>
      {canPost ? (
        <>
          <form onSubmit={formik.handleSubmit}>
            <label>Dish Name</label>
            <input
            id='name'
            name='name'
            type="text"
            onChange={formik.handleChange}
            value={formik.name}>
            </input>
            <label>Photo Url</label>
            <input
            id='photo'
            name='photo'
            type="text"
            onChange={formik.handleChange}
            value={formik.photo}>
            </input>
            <button type="submit">Post</button>

          </form>
          
          <button onClick={()=>{setCanPost(false)}}>Dont wanna post</button>
        </>
      ) : (
        <>
          <p>
            Please Verify your legitimacy by Typing in this Country's language
          </p>
          <form onSubmit={
                (e)=>{
                    e.preventDefault()
                    checkLanguage(search, country)
                    

                }}>
            <label>
              Type something in language from {country}:
              <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
         
        </>
      )}
    </div>
  );
}
