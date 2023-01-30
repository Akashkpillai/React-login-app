import React, { useEffect } from 'react'
import './user.css'
import {useNavigate} from 'react-router-dom'
import jd from 'jwt-decode'



function Userhome() {

const token = localStorage.getItem('token')
const  user = jd(token)
const userName = user.user
const navigate = useNavigate()

function logout(e){
  e.preventDefault()
  localStorage.clear()
  navigate('/login')
}
  return (
    <div className='container user-page'>
    <div className='user'>
      <h1 className='user-wel'><marquee direction ="left">
       {user?`Welcome ${userName}`:"HI"}
      </marquee>
      </h1>
      {
      user? 
      <button className='btn btn-primary user-lol' type='submit' onClick={logout}>
      Logout
    </button>:
      <button className='btn btn-primary user-lol' type='submit' onClick={()=>navigate('/login')}>
          Login
        </button>
      }
    </div>
    </div>
      
  )
}

export default Userhome