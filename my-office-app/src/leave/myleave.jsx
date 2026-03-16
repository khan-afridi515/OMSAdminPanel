import React from "react";
import "./leave.css";
// import axios from "axios";

const LeaveTable = ({ leaves, setLeaves }) => {

  const updateStatus = async (id, status) => {

    console.log("Updating leave", id, status);
    // const res = await axios.put(`/api/admin/leave/${id}`, {
    //   status
    // });

    // setLeaves(prev =>
    //   prev.map(l =>
    //     l._id === id ? { ...l, status } : l
    //   )
    // );
  };

  return (

    <div className="w-full overflow-x-auto">
    <table className="min-w-[700px] w-full border shadow text-sm">
  
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Employee</th>
          <th className="p-2 text-left">Type</th>
          <th className="p-2 text-left">Start</th>
          <th className="p-2 text-left">End</th>
          <th className="p-2 text-left">Reason</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
  
      <tbody>
        {leaves.map((leave, index) => (
          <tr key={index} className="border-t text-center">
  
            <td className="p-2 whitespace-nowrap">{leave.name}</td>
            <td className="p-2 whitespace-nowrap">{leave.leaveType}</td>
            <td className="p-2 whitespace-nowrap">{leave.startDate?.slice(0,10)}</td>
            <td className="p-2 whitespace-nowrap">{leave.endDate?.slice(0,10)}</td>
            <td className="p-2 max-w-[200px] truncate">{leave.reason}</td>
            <td className="p-2 whitespace-nowrap">{leave.status}</td>
  
            <td className="p-2 flex gap-2 justify-center">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded text-xs approve"
                onClick={() => updateStatus(leave._id, "Approved")}
              >
                Approve
              </button>
  
              <button
                className="bg-red-500 text-white px-2 py-1 rounded text-xs reject"
                onClick={() => updateStatus(leave._id, "Rejected")}
              >
                Reject
              </button>
            </td>
  
          </tr>
        ))}
      </tbody>
  
    </table>
  </div>



  );
};

export default LeaveTable;