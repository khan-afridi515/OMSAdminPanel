import React from 'react'
import History from './history'
import Side from '../side/sidebar'


const EmpHistory = ({removeItem, sideRef, showItem}) => {
  return (
    <div className='w-[100%] flex'>
      <div className='fixed top-0 left-0 z-50 h-screen sm:w-[20%] w-[80%] shadow-lg sm:block hidden flex flex-col' ref={sideRef}>
        <Side removeItem={removeItem}/>
      </div>
      <div className='relative sm:left-68 left-0 sm:w-[80%] w-[100%]'>
      <div className="absolute top-0 left-4 sm:hidden block">
      <i className="fa-solid fa-bars text-2xl" onClick={showItem} />
      </div>
         <History/>
      </div>
    </div>
  )
}

export default EmpHistory
