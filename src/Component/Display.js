import React, { useEffect, useState } from 'react'
import {FaYoutube} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import ShareOnFacebookButton from './share/ShareonFb'
import iconMan from "./images/maleicon.jpg"
import iconWoman from "./images/femaleicon.jpg"
import iconDesk from "./images/editoricon.png"
import iconMy from "./images/my avatar.jpg"
import axios from 'axios'

const Display = () => {
  const {Data} = useParams();
  const [data, setData] = useState();
  const [more, setMore] = useState();
  const [gen, setGen] = useState();
  useEffect(()=>{
    async function fetchData(){
      await axios.get(`https://node-blog-server-nzei.onrender.com/api/blog/actual?id=${Data}`)
      .then((response)=>{
        setData(response.data);
        setGen(response.data[0].gen);
      })
      .catch((error)=>console.log(error))
    }
    fetchData();
    },[Data])
  useEffect(()=>{
    async function fetchMoreData(){
      await axios.get("https://node-blog-server-nzei.onrender.com/api/blog/more")
      .then((response)=>{
        setMore(response.data)
      })
      .catch((error)=>console.log(error))
    }
    fetchMoreData();
  }, []);
  const handleIcon=()=>{
    switch (gen){
      case 'g':
        return iconMy;
      case 'm':
        return iconMan;
      case 'f':
        return iconWoman;
      default:
        return iconDesk;
    }
  }
  const renderCont=()=>{
    switch (data[0].cat){
    case 'latest':
    return(
      <><div className='getbox'><p>Get Started</p></div>
      <div className='Actualdata'>
        <h1>{data[0].heading}</h1>
        <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
        <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
        <h5>{data[0].date}</h5>
        <h3>{data[0].subheading}</h3>
        <p className='dscrptn'>{data[0].description}</p>
        <ShareOnFacebookButton/>
      </div>
      <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
    );
    case 'food':
      return(
      <><div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].title}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h5>{data[0].date}</h5>
          <h3>{data[0].heading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <a href={data[0].process} target='blank' style={{color:'#05386B', display:'flex', alignItems:'center', gap:'10px'}}><span><FaYoutube style={{width:'35px', height:'35px'}}/></span>Check the recipe</a>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
        </>
      );
    case 'bollywood':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].title}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4>A movie released in {data[0].date}</h4>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h4>Genre : {data[0].genre}</h4>
          <h3>Director : {data[0].derector}</h3>
          <h3>Cast : {data[0].cast}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
        </>
    );
    case 'hollywood':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].title}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4>A movie released in {data[0].date}</h4>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h4>Genre : {data[0].genre}</h4>
          <h3>Director : {data[0].derector}</h3>
          <h3>Cast : {data[0].cast}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
    );
    case 'fitness':
      return(
      <><div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].title}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h5>{data[0].date}</h5>
          <h3>{data[0].heading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <p className='prcs'><span style={{fontSize:'22px', textDecoration:'underLine'}}>Process:</span>  {data[0].process}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
    );
    case 'tech':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
    );
    case 'top-tech':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
    );
    case 'top-fit':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
    );
    case 'top-food':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
    );
    case 'top-bolly':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
    );
    case 'top-holly':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
    );
    case 'more':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{data[0].heading}</h1>
          <img src={data[0].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h5>{data[0].date}</h5>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {data[0].author}</h4>
          <h3>{data[0].subheading}</h3>
          <p className='dscrptn'>{data[0].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
      <div className='moreBox'>
        {more.map((elmnt, index)=>{
          return(
            <div className='more-element' key={index}>
              <Link to={"/display/"+elmnt.id}>
              <img src={elmnt.poster} alt='' className='catagory-poster'/>
              </Link>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <h3>{elmnt.heading}</h3>
              <h5>By : {elmnt.author}</h5>
              <h6>{elmnt.date}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
    );
    default:
      return <h2>Nothing to show...</h2>
  }}
  return(
    <>
    {data && more && renderCont()}
    </>
  )
}

export default Display