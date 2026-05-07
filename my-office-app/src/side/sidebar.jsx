import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'


const Side = ({removeItem}) => {

   

    const turnOut = () => {
        console.log("you are turn out");
        localStorage.removeItem("adminToken");
        window.location.href = "/login";
    }

    return (
        <div className='relative w-full h-full py-4 px-4 bg-blue-700'>
            <div className="absolute top-4 right-7 text-white md:hidden block">
                <i className="fa-solid fa-times text-2xl cursor-pointer" onClick={removeItem}></i>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-white mb-10 mt-8'>AptechMedia</h2>
            </div>
            <div className='flex flex-col sm:pt-0 pt-2 pl-2 h-130'>

                <div className='flex flex-col gap-2'>
                    <NavLink to="/" end className={({ isActive }) => `text-[14px] font-[500] ${isActive ? "bg-blue-400 text-blue-500" : "text-blue-500"}`}><div className='flex gap-3 w-full py-1.5 px-2.5'>

                        <p className='text-[#0D121C] text-[16px] font-bold font-[500] text-white'>Dashboard</p>
                    </div></NavLink>

                    <NavLink to="/leave" end className={({ isActive }) => `text-[14px] font-[500] ${isActive ? "bg-blue-400 text-blue-500" : "text-blue-500"}`}><div className='flex gap-3 w-full py-1.5 px-2.5'>

                        <p className='text-[#0D121C] text-[16px] font-bold font-[500] text-white'>Leave</p>
                    </div></NavLink>

                    <NavLink to="/event" end className={({ isActive }) => `text-[14px] font-[500] ${isActive ? "bg-blue-400 text-blue-500" : "text-blue-500"}`}><div className='flex gap-3 w-full py-1.5 px-2.5'>
                        <p className='text-[#0D121C] text-[16px] font-bold font-[500] text-white'>Event</p>
                    </div></NavLink>

                    <NavLink to="/history" end className={({ isActive }) => `text-[14px] font-[500] ${isActive ? "bg-blue-400 text-blue-500" : "text-blue-500"}`}><div className='flex gap-3 w-full py-1.5 px-2.5'>
                        <p className='text-[#0D121C] text-[16px] font-bold font-[500] text-white'>History</p>
                    </div></NavLink>



                </div>

                <div className='mt-auto flex gap-3 logout text-white'>
                    <img src="/arrow.png" className="w-5 h-5 " alt="" />
                    <button type="button" className='text-[#0D121C] text-[14px] font-[500] cursor-pointer' onClick={turnOut}>Log Out</button>
                </div>
            </div>
            <div>


            </div>

        </div>
    )
}

export default Side
