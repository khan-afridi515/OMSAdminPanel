import React, { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeaveRequests from './leave/leaverequest';
import Events from './event/event';
import Side from './side/sidebar';
import Mydish from './dish/myDish';
import Log from './log';
import ProtectedRoute from "./protectedRoute";
import History from './attandanceHistory/history';
import EmpHistory from './attandanceHistory/emphistory';



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

  const now = new Date();

  const dt = now.getDate();
  console.log("my date", dt);

  console.log("my time",now);

  // localStorage.removeItem("adminToken");

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/leave" element={<ProtectedRoute><LeaveRequests sideRef={sideRef} removeItem={removeItem} showItem={showItem}/></ProtectedRoute>}/>
        <Route path="/event" element={<ProtectedRoute><Events sideRef={sideRef} removeItem={removeItem} showItem={showItem}/></ProtectedRoute>}/>
        <Route path="/login" element={<Log/>}/>
        <Route path="/" element={<ProtectedRoute><Mydish sideRef={sideRef} removeItem={removeItem} showItem={showItem}/></ProtectedRoute>}/>
        <Route path="/history" element={<ProtectedRoute><EmpHistory  sideRef={sideRef} removeItem={removeItem} showItem={showItem}/></ProtectedRoute>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
