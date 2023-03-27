import axios from 'axios';
import React from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react';
// import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
export const Description = () => {
  let navigate= useNavigate();
  const {id} = useParams();
  const [item,setItem]=useState();
  const fetch= async()=>{
    const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=640ad3691684b421a578d223fcebb80b&hash=9946f4109fe961f7215e6eec750f2e86`)
    // console.log(res.data.data.results[0])
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    
    <>
      {
      (!item) ? "" :(
        <div className='box-content'>
          <div className='right-box'>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
          </div>
          <div className='left-box'>
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
            <button style={{color:'#fff'}} onClick={()=>navigate(`/`)}>Back</button>
          </div>
        </div>
      )
      }
    </>
  )
}
