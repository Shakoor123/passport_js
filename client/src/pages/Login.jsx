import React, { useEffect } from 'react'


import './Login.css'
function Login() {


    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
  return (
    <div>
        <div className='login'>
            <h1 className="loginTitle">Choose a login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
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