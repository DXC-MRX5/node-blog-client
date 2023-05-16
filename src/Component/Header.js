import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {BiMenu, BiHome, } from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'


const Header = () => {
  const navi=useNavigate()
  const [down,setDown]=useState(true)
  const handleDown=()=>{
    setDown(!down);
  }
  return (
    <div className='header-cntnr'>
        <div className='heading'>
            <h2>The</h2> 
            <h1>SIREN</h1>
        </div>
        <div className='mobileNav'>
        {down ? <div className='downon'>
          <button className='hmbtn btn' onClick={()=>navi('/home')}><BiHome style={{width:'40px', height:'40px', color:'#05386B'}}/></button>
          <button className='mnbtn btn' onClick={handleDown}><BiMenu style={{width:'40px', height:'40px', color:'#05386B'}}/></button>
        </div>: <div className='downoff'>
          <button className='hmbtn btn' onClick={()=>navi('/home')}><BiHome style={{width:'40px', height:'40px', color:'#05386B'}}/></button>
          <div className='moblinks'>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/hollywood'>Hollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/bollywood'>Bollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/food'>Food</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/fitness'>Fitness</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/tech'>Technology</NavLink></p>
        </div>
          <button className='clsbtn btn' onClick={handleDown}><AiFillCloseCircle style={{width:'40px', height:'40px', color:'#05386B'}}/></button>
        </div>}
        </div>
        <div className='links'>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/home'>Home</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/hollywood'>Hollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/bollywood'>Bollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/food'>Food</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/fitness'>Fitness</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/tech'>Technology</NavLink></p>
        </div>
    </div>
  )
}

export default Header