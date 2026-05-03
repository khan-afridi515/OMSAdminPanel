import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./App.css";
import { adminLocalhost } from './localhostUrl';
import axios from 'axios';


const Log = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const holeUrl = `${userlocalHost}/api/v0/users/loginUser`;

  const myNav = useNavigate();

  
  const data = {
    email: email, 
    password: password
  }
  
 const loginUrl = `${adminLocalhost}/api/v3/adminroute/ownLogin`;

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(loginUrl, data)
    .then((res)=>{
      console.log(res.data.data.token);
      localStorage.setItem("adminToken", res.data.data.token);

      myNav("/");
    })
    .catch((err)=>{
      console.log(err);
    })

    setEmail("");
  setPassword("");

    // myNav("/dish");

  }


  return (
    <div className='flex justify-center items-center w-full h-[95vh]'>
      <div className='sm:px-8 px-4 py-12 border border-3 rounded-md'>
        <h1 className='text-2xl font-bold text-black text-center mb-7'>Log In</h1>
        <div>
            <form action="" onSubmit={handleLogin} className='flex flex-col gap-6'>
                <input type="text" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className=' w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md '/>
                <div className='flex flex-col'>
                <input type="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md'/>
                 <p className='text-[14px] self-end'>Forgot Password</p>
                </div>
                <button type="submit" className='py-2 text-[16px] px-3 text-white text-xl font-bold text-white text-center bg-blue-500 rounded-md field'>Log In</button>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Log
