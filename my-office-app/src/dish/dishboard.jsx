import React, { useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell
} from "recharts";
import { adminLocalhost } from "../localhostUrl";
import axios from "axios";

// Example data
const leaveData = [
  { name: "Approved", value: 45 },
  { name: "Rejected", value: 12 },
];

const attendanceData = [
  { name: "Present", value: 120 },
  { name: "Leave", value: 20 },
  { name: "Event", value: 15 },
];

const eventsData = [
  { title: "Meeting", participants: 10 },
  { title: "Workshop", participants: 15 },
  { title: "Seminar", participants: 20 },
];

const absentUrl = `${adminLocalhost}/api/v1/attandance/markabsentAttandance`;
const adminToken = localStorage.getItem("adminToken");
console.log("adminToken", adminToken);

// taking admin token

const COLORS = ["#34D399", "#F87171", "#60A5FA"]; // green, red, blue

const Dishboard = () => {
  
  useEffect(()=>{
   axios.post(absentUrl, {}, {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        })
   .then((res)=>{
    console.log(res);
   })

},[adminToken])

  return (
    <div className="py-20 px-4 sm:p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-6">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">

        <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-4 shadow-lg flex flex-col justify-between">
          <h2 className="text-sm sm:text-lg font-semibold">Total Leave Requests (Monthly)</h2>
          <p className="text-2xl sm:text-4xl font-bold mt-2 sm:mt-4">50</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-xl p-4 shadow-lg flex flex-col justify-between">
          <h2 className="text-sm sm:text-lg font-semibold">Approved vs Rejected</h2>
          <div className="mt-2 sm:mt-4 flex gap-4 text-sm sm:text-lg">
            <p>✅ {leaveData[0].value}</p>
            <p>❌ {leaveData[1].value}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-4 shadow-lg flex flex-col justify-between">
          <h2 className="text-sm sm:text-lg font-semibold">Total Events</h2>
          <p className="text-2xl sm:text-4xl font-bold mt-2 sm:mt-4">60</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-xl p-4 shadow-lg flex flex-col justify-between">
          <h2 className="text-sm sm:text-lg font-semibold">Event Participation Count</h2>
          <p className="text-2xl sm:text-4xl font-bold mt-2 sm:mt-4">
            {eventsData.reduce((acc, e) => acc + e.participants, 0)}
          </p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        {/* Attendance Bar Chart */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Attendance Summary</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={attendanceData}
              margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value">
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-bar-${index}`} fill={COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Event Cards */}
      

    </div>
  );
};

export default Dishboard;