// MyComponent.js
import React, { useState } from 'react';
import "./css/login.css";
import LoginLeft from "../assets/icons/login-left.svg";
import LoginForm from './subcomponents/LoginForm';
import SignupForm from './subcomponents/SignupForm';


function LoginPage({login}) {
    const [showLogin, setShowLogin] = useState(true);
    const changeForm = () =>{
        setShowLogin(!showLogin);
    };

  return (
    <div className='login'>

        <div className='left_login'>
            <img src={LoginLeft} alt="login left" className='login_left'/>
        </div> 

        <div className='right_login'>
            <div> 
                <div className='heading'>{showLogin ? "Sign up" : "Sign in"}</div>
                <div className='content'>Get started by entering your details</div>
                {showLogin ? <SignupForm changeForm={changeForm} goMain={login}></SignupForm> : <LoginForm changeForm={changeForm} goMain={login}></LoginForm>}
                

            </div>
        </div>   
        
    </div>
  );
}

export default LoginPage;