import React, { useState } from 'react'
import Header from './Header'

function Login() {
    const [isSignIn, setIsSignIn] = useState(true)
    const toggleForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
            <Header/>
            <form className= 'px-16 py-16 text-white bg-black flex flex-col w-4/12  absolute right-[37.5%] left-[32.5%] top-[10%] bg-opacity-80'>
                <h1 className='text-3xl font-semibold m-2 mb-6'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input className='w-full my-2 px-5 py-3 bg-slate-800 rounded-md' placeholder='Full Name' type='text'/>}
                <input className='w-full my-2 px-5 py-3 bg-slate-800 rounded-md' placeholder='Email or Phone Number' type='text'/>
                <input className = 'w-full my-2 px-5 py-3 bg-slate-800 rounded-md' placeholder='Password' type='password'/>
                <button className='w-full my-4 mt-6 px-5 py-3 bg-red-700 rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="px-1 pt-10 text-slate-500">{isSignIn ? "New to Netflix?" : "Already a User?"} <span className='text-white cursor-pointer' onClick={toggleForm}>{isSignIn ?"Sign Up now" :"Sign In now"}.</span></p>
                <p className="px-1 pt-3 mb-15 text-xs text-slate-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
            <div>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt = "netflix-bg"
                className='bg-gradient-to-r from-blue-500 to-transparent'/>
            </div>
            
        </div>
    )
}

export default Login
