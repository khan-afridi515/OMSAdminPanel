import React, { useEffect, useRef, useState } from "react";
import LeaveTable from "./myleave";
import Side from "../side/sidebar";

// import axios from "axios";

const LeaveRequests = ({sideRef, removeItem, showItem}) => {

  const [leaves, setLeaves] = useState([
    {
      name: "Afridi",
      leaveType: "Sick Leave",
      startDate: "2024-07-01",
      endDate: "2024-07-03",
      reason: "Feeling unwell",
      status: "Pending"
    },
    {
      name: "Amir Khan",
      leaveType: "Casual Leave",
      startDate: "2026-07-05",
      endDate: "2026-07-08",
      reason: "Family function",
      status: "Pending"
    },

  ]);

  //   useEffect(() => {

  //     axios.get("/api/admin/leaves")
  //       .then(res => setLeaves(res.data));

  //   }, []);


  return (

    <div className="relative w-full flex">



      <div className="sm:static fixed top-0 left-0 z-50 h-screen sm:w-[20%] w-[80%] shadow-lg sm:block hidden flex flex-col" ref={sideRef}>
      
        <Side  removeItem={removeItem}/>
      </div>
      <div className="relative px-6 py-20 sm:w-[80%] w-[100%]">

        <div className="absolute top-5 left-6 sm:hidden block">
        <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={showItem}></i>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          Leave Requests
        </h1>

        <LeaveTable leaves={leaves} setLeaves={setLeaves} />
      </div>


    </div>

  );
};

export default LeaveRequests;