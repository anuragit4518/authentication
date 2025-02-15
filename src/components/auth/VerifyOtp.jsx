import React, { useState, useEffect, useRef } from 'react';
import Button from "../ui/Button";
import BackToLogin from '../ui/BackToLogin';
import Timer from './Timer'
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

    const [otp1,setotp1] =  useState('');
    const [otp2,setotp2] =  useState('');
    const [otp3,setotp3] =  useState('');
    const [otp4,setotp4] =  useState('');
    const [otp5,setotp5] =  useState('');
    const [otp6,setotp6] =  useState('');

    const otpArray = [setotp1,setotp2,setotp3,setotp4,setotp5,setotp6];

    const navigate = useNavigate();

    useEffect(() => {
        if (ref1.current) {
            ref1.current.focus();
        }
    }, []);

    const inputchange = (event, location) => {
        if(location<5 && event.target.value){
         inputRef[location+1].current.focus() 
        }
        otpArray[location](event.target.value);

        console.log(location);
    };
    
    const submitHandler = (event) =>{
        
        event.preventDefault();
        console.log(otp1,otp2,otp3,otp4,otp5,otp6);
        navigate("password/update")
    }

    return (
        <div className="auth_main">
            <form onSubmit={submitHandler}>
                <div className="auth_container">
                    <div className="auth_header">
                        <p className="auth_heading">Verify your OTP</p>
                        <p className="auth_title">Enter 6-digit OTP sent at your email</p>
                    </div>
                    <div className="auth_item">
                        <label>OTP</label>
                        <div className='otp_input_container'>
                            {inputRef.map((item, index) => (
                                <input
                                required
                                    key={index}
                                    onChange={(event) => inputchange(event, index)}
                                    ref={item}
                                    onInput={(event) => {
                                        if (event.target.value.length > 1) {
                                            event.target.value = event.target.value.slice(0, 1);
                                        }
                                    }}
                                    type="number"
                                    className='ui_input'
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="auth_action">
                    <Button>Verify</Button>
                </div>
                <div>
                    <Timer/>
                </div>
                <div>
                    <BackToLogin/>
                </div>
            </form>
        </div>
    );
};

export default VerifyOtp;
