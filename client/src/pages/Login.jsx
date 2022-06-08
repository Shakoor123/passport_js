import React, { useEffect } from 'react'
import image from '../images/3.jpeg'
import './Login.css'
function Login() {


    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
  return (
    <div>
        <div className='login'>
            <h1 className="loginTitle">Choose a login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={image} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={image} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={image} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='username' />
                    <input type="text" placeholder='password' />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login