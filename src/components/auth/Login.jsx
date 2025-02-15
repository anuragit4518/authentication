import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const emailChange = (event) =>{

    setEmail(event.target.value);
  }
  const passwordChange = (event) =>{

    setPassword(event.target.value);
  }
  const submitHandler = (event) =>{

      event.preventDefault();
      console.log(email,password);

  }

  return (
    <div className='auth_main'>
      <form onSubmit={submitHandler}>
        <div className="auth_container">
            <div className="auth_header">
                <p className='auth_heading'>Welcome back</p>
                <p className="auth_title">login to continue</p>
            </div>
            <div className="auth_item">
                <label>Email *</label>
                <Input onChange = {emailChange}type = 'email'required placeholder = 'Enter your email'/>
                
            </div>
            <div className="auth_item">
                <label>Password *</label>
                <Input onChange = {passwordChange}type = 'password' required placeholder = 'Enter your password'/>

            </div>
            <div className="auth_action">
                <Button>Login</Button>
            </div>
            <div className="auth_options">

            <Link to ='/register'>Create new account?</Link>
            <Link to ="/forget/password">Forgot Password</Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login
