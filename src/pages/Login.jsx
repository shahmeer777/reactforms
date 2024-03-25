import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
function Login() {
  return (
    <div className='p-10'>

    <div className='bg-[#0D2841] px-2 py-1 mb-5 rounded-xl	 w-11 '>
        <IoMdArrowRoundBack color='white'size={30} />
    </div>

    <div className='text-left' >
        <p className='text-3xl font-bold' >
            <span className='text-gray-400'>Sign Up</span>
           &nbsp; / &nbsp;
            <span>Login</span>
        </p>
        <p className='text-black font-semibold mt-2'>Good to see you back!</p>
    </div>
    

    <div className='text-left mt-14'>
        <form action="">
            <div className='mb-8'>
            <label htmlFor="" className='text-black font-semibold mt-2'>
            Email/Username
            </label>
            <input type="email" name="" id="" 
            className='border-b border-b-[#0D2841] w-full rounded-full border-b-[1.5px] '/>
          </div>
          <div>

              <label htmlFor="" className='text-black font-semibold mt-2'>
            Password
            </label>
            <input type="email" name="" id="" 
            className='border-b border-b-[#0D2841] w-full rounded-full border-b-[1.5px]  '/>
        </div>


        <div>
            <button className='w-full py-3 bg-[#0D2841]  shadow-lg font-semibold text-xl text-white mt-10 mb-5 rounded-lg'>Log in</button>
        </div>
        </form>
    </div>

<div>
<p className='text-xl font-semi-bold mt-4 mb-4' >
                or
        </p>
</div>

<div className='mt-4 mb-5'>
<p className='text-xl  ' >
Log in with <span className='font-semibold'>Google</span> 
        </p>
</div>

    </div>

    )
}

export default Login