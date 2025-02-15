import React, { useState } from 'react';
import './auth.css';
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackToLogin from '../ui/BackToLogin';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const nameChange = (event) =>{
    setName(event.target.value);
  }
  const emailChange = (event) =>{
    setEmail(event.target.value);
  }
  const passwordChange = (event) =>{
    setPassword(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    navigate('/login');
  }
  return (
    <div className='auth_main'>
      
      <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
        
            <p className = "auth_heading">Welcome</p>
            <p className='auth_title'>create a new account</p>
            </div>
               <div className="auth_item">
                <label>Name *</label>
                   <Input onChange = {nameChange}type = "text" required placeholder = "Enter your name"></Input> 
                </div>  
               <div className="auth_item">
                <label>Email </label>
                   <Input onChange = {emailChange} type = "email" required placeholder = "Enter your email"></Input> 
                </div>  
               <div className="auth_item">
                <label>Password </label>
                   <Input onChange = {passwordChange} type = "password" required placeholder = "Enter your password"></Input> 
                </div>  

                <div className="auth_action">
                  <Button>Register</Button>
                </div>
                <div>
                  <BackToLogin></BackToLogin>
                </div>
        </div>
      </form>
    </div>
  )
}

export default Register
