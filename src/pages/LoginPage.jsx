import React from 'react'
import loginLogo from "../images/login-logo.png";
import { Link } from "react-router-dom"
import "./loginPage.css";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"
const LoginPage = () => {
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,);
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="login-logo" src={loginLogo} alt="" />
            </Link>
            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value="" />

                    <h5>Password</h5>
                    <input type='password' value="" />

                    <button className='login-signInBtn' type='submit' onClick={register}>Sign in</button>
                    <p>By continuing, ypu agree to Amazon's Fake Clone Conditions of use and Privacy Notice. </p>
                    <button className='login-registerBtn'>Create your Amazon Account</button>
                </form>

            </div>
        </div>
    )
}

export default LoginPage
