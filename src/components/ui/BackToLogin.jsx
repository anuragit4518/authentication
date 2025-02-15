import React from 'react'
import './BackToLogin.css'
import {useNavigate}from 'react-router-dom'
const BackToLogin = () => {
  const navigate = useNavigate();
  const navigateHandler = () =>{

    navigate('/login');
  }
  return (
    <div onClick = {navigateHandler}className='back_toLogin_ui'>
      back to login
    </div>
  )
}

export default BackToLogin
