import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import Slider from "./ImageSlider"
import static1 from './images/static1.jpg'
import static2 from './images/static2.jpg'
import { Link } from "react-router-dom"
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'

const Home = () => {
  const [data, setData] = useState();
  const [latest, setLatest] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get("https://node-blog-server-nzei.onrender.com/api/blog/home")
    .then((response)=>{
      setData(response.data);
    })
  }, [])
  useEffect(()=>{
    axios.get("https://node-blog-server-nzei.onrender.com/api/blog/latest")
    .then((response)=>{
      setLatest(response.data);
      setIsLoading(!isLoading);
    })
    .catch((error)=>console.log(error))
  }, [])
  const [load,setLoad]=useState(true)
  const loadMore=()=>{
    setLoad(!load);
  }
  return (
    <div className='Home'>
      <div className="slide-cntnr">
      <Slider/>
      <div className="staticHolder">
      <img src={static1} alt="" className="staticimage"/>
      <img src={static2} alt="" className="staticimage"/>
      </div>
      </div>
      {isLoading ? <h2>Loading...</h2>
      : <>
      <div className="latest-cntnr">
      <h1>Latest Stories</h1>
      {load ? <div className="before">{latest.filter(
          (info)=>info.show==="before"
        ).map((elmnt,index)=>{
          return(
            <div key={index} className="latest-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='latest-poster'/>
            </Link>
            <div className="latestBox">
              <h3>{elmnt.heading}</h3>
              <h4>{elmnt.subheading}</h4>
            </div>
            </div>
          )
        })}</div> : <div className="after">{latest.filter(
          (info)=>info.show==="after"
        ).map((elmnt,index)=>{
          return(
            <div key={index} className="latest-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='latest-poster'/>
            </Link>
            <div className="latestBox">
              <h3>{elmnt.heading}</h3>
              <h4>{elmnt.subheading}</h4>
            </div>
            </div>
          )
        })}</div>}
      </div>
      <div className="btndiv">{load ? <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowRightSquareFill style={{width:'40px', height:'40px'}}/> Next</button>
      : <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowLeftSquareFill style={{width:'40px', height:'40px'}}/> Previous</button>}</div>
      <div className="Home-cntnr">
      <div className="home-catagory-cntnr">
      <h1>Top Articles</h1>
        <div className="home-Bolly">
        {data.filter(
          (info)=>info.cat === "bollywood"
        ).map((elmnt,index)=>{
          return (
            <div key={index} className="home-catagory-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='catagory-poster'/>
            </Link>
            <div className="topicBox">
            <h3>{elmnt.title}</h3>
            <h5>{elmnt.date} || Genre : {elmnt.genre}</h5>
            <h4>IMDB Rating : {elmnt.imdb}</h4>
            </div>
            </div>
            )
        })}
        </div>
        <div className="home-Tech">
        {data.filter(
          (info)=>info.cat === "tech"
        ).map((elmnt,index)=>{
          return (
            <div key={index} className="home-catagory-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='catagory-poster'/>
            </Link>
            <div className="topicBox">
            <h3>{elmnt.heading}</h3>
            <h4>By : {elmnt.author}</h4>
            <h5>{elmnt.date}</h5>
            </div>
            </div>
            )
        })}
        </div>
        <div className="home-Fit">
        {data.filter(
          (info)=>info.cat === "fitness"
        ).map((elmnt,index)=>{
          return (
            <div key={index} className="home-catagory-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='catagory-poster'/>
            </Link>
            <div className="topicBox">
            <h3>{elmnt.title}</h3>
            <h4>{elmnt.heading}</h4>
            <h5>{elmnt.date}</h5>
            </div>
            </div>
            )
        })}
        </div>
        <div className="home-Holly">
        {data.filter(
          (info)=>info.cat === "hollywood"
        ).map((elmnt,index)=>{
          return (
            <div key={index} className="home-catagory-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='catagory-poster'/>
            </Link>
            <div className="topicBox">
            <h3>{elmnt.title}</h3>
            <h5>{elmnt.date} || Genre : {elmnt.genre}</h5>
            <h4>IMDB Rating : {elmnt.imdb}</h4>
            </div>
            </div>
            )
        })}
        </div>
        <div className="home-Food">
        {data.filter(
          (info)=>info.cat === "food"
        ).map((elmnt,index)=>{
          return (
            <div key={index} className="home-catagory-element">
            <Link to={"/display/"+elmnt.id}>
            <img src={elmnt.poster} alt='' className='catagory-poster'/>
            </Link>
            <div className="topicBox">
            <h3>{elmnt.title}</h3>
            <h4>{elmnt.heading}</h4>
            <h5>{elmnt.date}</h5>
            </div>
            </div>
            )
        })}
        </div>
      </div>
      <div className="rightBar">
        <div className="adBox"><h3>Advertisement</h3></div>
        <div className="top-cntnr">
        <h1>Top Posts</h1>
          {latest.filter(
            (info)=>info.isTop==="yes"
            ).map((elmnt,index)=>{
            return(
              <div key={index} className="topBox">
                  <Link to={"/display/"+elmnt.id}>
                  <img src={elmnt.poster} alt='' className='top-poster'/>
                  </Link>
                  <div className="topTopic">
                    <h4>{elmnt.heading}</h4>
                    <h6>{elmnt.date}</h6>
                  </div>
                  <h2>{index+1}</h2>
                  </div>
            )
          })
          }
        </div>
      </div>
    </div></>}
    </div>
  )
}

export default Home