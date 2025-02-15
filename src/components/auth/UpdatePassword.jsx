import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {

    const [password,setPassword] = useState('');
    const [confirmpassword,setconfirmPassword] = useState('');
    const navigate = useNavigate();

    const passwordChange = (event) =>{
        setPassword(event.target.value);
        
    }
    const confirmPasswordChange = (event) =>{
        setconfirmPassword(event.target.value);

    }
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(password,confirmpassword)
        navigate('/login');
    }

  return (
    <div className="auth_main">
        <form onSubmit={submitHandler}>
            <div className="auth_container">
                <div className="auth_header">
                    <p className='auth_heading'>New Password</p>
                    <p className="auth_title">enter at least 6-digit long password</p>
                    <div className="auth_item">
                        <label>Password</label>
                        <Input onchange = {passwordChange}type = 'text'required placeholder = 'new password'/>
                    </div>
                    <div className="auth_item">
                        <label>Confirm Password</label>
                        <Input onChange = {confirmPasswordChange}type = 'text'required placeholder = 'confirm password'/>
                    </div>
                    <div className="auth_action">
                        <Button>Update Password</Button>
                    </div>
                    <div>

                    <BackToLogin/>

                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default UpdatePassword
