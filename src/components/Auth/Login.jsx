/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = ({loginHandler}) => {
    const [flag, setflag] = useState(0);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const submitHandler = (e)=>{
        e.preventDefault();
        loginHandler(email,password)
        // console.log(email);
        // console.log(password);

        setemail("");
        setpassword("");
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center max-sm:p-10'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col gap-5 w-1/4 max-sm:w-full border-2 border-slate-900 p-10 py-16 max-sm:p-7 max-sm:py-16 rounded-xl'>
            <input value={email} onChange={(e)=>{setemail(e.target.value)}} autoComplete='none' required type="email" placeholder='Enter your email' className='border-red-800 border-2 rounded-full outline-none px-5 py-3'/>
            <div className='relative flex items-center justify-between'>
                <input value={password} minLength={8} maxLength={16} onChange={(e)=>{setpassword(e.target.value)}} autoComplete='none' required type={flag ? "text" : "password"} placeholder='Enter your password' className='border-red-800 w-full border-2 outline-none rounded-full px-5 py-3'/>
                {flag ? <div className='absolute right-5' onClick={()=>setflag(0)}><FaRegEye /></div> : <div className='absolute right-5' onClick={()=>setflag(1)} ><FaRegEyeSlash /></div>}
            </div>
            <div className='flex gap-3 ml-2'>
                <input aria-required className='form-checkbox text-red-800 p-1 rounded-full' type="checkbox"/> <span>Remember me</span>
            </div>
            <button  className='bg-red-800 text-white text-xl font-semibold rounded-full px-5 py-3'>Login</button>
        </form>
    </div>
  )
}

export default Login