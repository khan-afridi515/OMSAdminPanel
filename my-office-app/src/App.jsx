import React, { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeaveRequests from './leave/leaverequest';
import Events from './event/event';
import Side from './side/sidebar';
import Mydish from './dish/myDish';
import Log from './log';




const App = () => {

  const sideRef = useRef();

  const removeItem = () => {
     sideRef.current.style.display = "none";
     console.log("item removed");
  }

  const showItem = () =>{
    sideRef.current.style.display = "block";
    console.log("show block");
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/leave" element={<LeaveRequests sideRef={sideRef} removeItem={removeItem} showItem={showItem}/>}/>
        <Route path="/event" element={<Events sideRef={sideRef} removeItem={removeItem} showItem={showItem}/>}/>
        <Route path="/" element={<Log/>}/>
        <Route path="/dish" element={<Mydish sideRef={sideRef} removeItem={removeItem} showItem={showItem}/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
