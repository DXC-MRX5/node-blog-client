import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {BsFillArrowDownSquareFill, BsFillArrowUpSquareFill} from 'react-icons/bs'
import SimpleBackdrop from './Backdrop';

const Fitness = () => {
  const [data, setData] = useState();
  const [top, setTop] = useState();
  useEffect(()=>{
    axios.get("https://node-blog-server-nzei.onrender.com/api/blog/fitness")
    .then((response)=>{
      setData(response.data);
    })
    .catch((error)=>console.log(error))
  }, [])
  useEffect(()=>{
    axios.get("https://node-blog-server-nzei.onrender.com/api/blog/topfit")
    .then((response)=>{
      setTop(response.data);
    })
    .catch((error)=>console.log(error))
  }, [])
  const [load,setLoad]=useState(true)
  const loadMore=()=>{
    setLoad(!load);
  }
  return (
    <div className='Fitness'>
    {(data && top) ? <><div className='catagory-leftPart'>
    <h1 className='catagory-heading'>Fitness</h1>
      <div className='cntxtdata-cntnr'>
      {load ? <>{data.filter((data)=>
            data.ind < 25
          ).map((elmnt,index)=>{
            return(
              <div key={index} className='catagory-element'>
              <Link to={"/display/"+elmnt.ind}>
                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                </Link>
                <div>
                <h3>{elmnt.title}</h3>
                <h5>{elmnt.date} Genre : {elmnt.genre}</h5>
                <h4>IMDB Rating : {elmnt.imdb}</h4>
                </div>
              </div>
            )
            })
          }</> : <>
          {data.map((elmnt,index)=>{
            return(
              <div key={index} className='catagory-element-new'>
              <Link to={"/display/"+elmnt.ind}>
                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                </Link>
                <div>
                <h3>{elmnt.title}</h3>
                <h5>{elmnt.date} Genre : {elmnt.genre}</h5>
                <h4>IMDB Rating : {elmnt.imdb}</h4>
                </div>
              </div>
            )
            })
          }
          </>}
          <div className="catagory-btndiv">{load ? <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowDownSquareFill style={{width:'40px', height:'40px'}}/> More</button>
      : <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowUpSquareFill style={{width:'40px', height:'40px'}}/> Less</button>}</div>
      </div>
    </div>
    <div className='catagory-rightPart'>
      <div className='top-cntnr'>
        <h1>Top Posts</h1>
        {top.map((elmnt,index)=>{
          return(
            <div className='topBox'>
                  <Link to={"/display/"+elmnt.ind}>
                  <img src={elmnt.poster} alt='' className='top-poster'/>
                  </Link>
                  <div className="topTopic">
                    <h4>{elmnt.heading}</h4>
                    <h6>{elmnt.date}</h6>
                  </div>
                  <h2>{index+1}</h2>
            </div>
          )
        })}
      </div>
      <div className="catagory-adBox"><h3>Advertisement</h3></div>
    </div>
    </>
    : <SimpleBackdrop/>}
    </div>
  )
}

export default Fitness