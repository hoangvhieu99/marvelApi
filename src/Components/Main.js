import React from 'react'
import bg from '../img/bg.png'
import logo from '../img/logo.jpg'
import { Card } from './Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

// calcaulator md5 1+privatekey+publickey
// const hash="9946f4109fe961f7215e6eec750f2e86"
export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=640ad3691684b421a578d223fcebb80b&hash=9946f4109fe961f7215e6eec750f2e86")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      // console.log(res.data.data.results)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=640ad3691684b421a578d223fcebb80b&hash=9946f4109fe961f7215e6eec750f2e86`)
  }
  return (
    <>
        <div className="header">
            <div className="bg">
                <img src={bg} alt="" />
            </div>
            <div className="search-bar">
                <img src={logo} alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}
                 />
            </div>
        </div>

        <div className="content">
          {
            (!item)?<p>Loading</p>:<Card data={item}/>
          }
        </div>
    </>
  )
}
