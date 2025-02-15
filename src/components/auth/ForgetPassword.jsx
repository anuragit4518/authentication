import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Forgetpassword = () => {

        const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const emailchanger = (event) =>{

        setEmail(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        navigate('/otp/verify');
        
    }
   

  return (
    <div className="auth_main">
        <form onSubmit = {submitHandler}>
            <div className="auth_container">
                <div className="auth_header">
                    <p className="auth_heading">Forget your password</p>
                    <p className="auth_title">Enter your registered mail we will send 6-digit otp</p>

                </div>
                <div className="auth_item">
                    <label>Email</label>
                    <Input onChange = {emailchanger}type = 'email' required/>
                </div>
                <div className="auth_action">
                    <Button>Send OTP</Button>
                </div>
                <div>
                    <BackToLogin/>

                </div>
            </div>
        </form>
    </div>
  )
}

export default Forgetpassword
