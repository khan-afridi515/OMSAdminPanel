import React from "react";
import "./leave.css";
// import axios from "axios";

const LeaveTable = ({ leaves, setLeaves }) => {

  console.log("leaves in table", leaves);

  const [hoveredReason, setHoveredReason] = React.useState(null);

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
          {/* {leaves.map((leave, index) => (

            <tr key={index} className="border-t text-center">

              <td className="p-2 whitespace-nowrap">{leave.name}</td>
              <td className="p-2 whitespace-nowrap">{leave.leaveType}</td>
              <td className="p-2 whitespace-nowrap">{leave.startDate?.slice(0, 10)}</td>
              <td className="p-2 whitespace-nowrap">{leave.endDate?.slice(0, 10)}</td>
             

              <td className="p-2 max-w-[200px] relative group cursor-pointer">
                <div className="truncate">
                  {leave.reason}
                </div>

                <div className="hidden group-hover:block absolute left-0 top-full mt-1 w-[250px] bg-white border border-gray-300 p-2 shadow-lg z-20 whitespace-normal">
                  This is very important reason
                </div>
              </td>

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



          ))} */}

          {leaves.map((leave, index) => (
            <>
              <tr key={index} className="border-t text-center relative">

                <td className="p-2 whitespace-nowrap">{leave.name}</td>
                <td className="p-2 whitespace-nowrap">{leave.leaveType}</td>
                <td className="p-2 whitespace-nowrap">{leave.startDate?.slice(0, 10)}</td>
                <td className="p-2 whitespace-nowrap">{leave.endDate?.slice(0, 10)}</td>

                {/* Reason column */}
                <td className="p-2 max-w-[200px] relative group cursor-pointer"
                  onMouseEnter={() => setHoveredReason(leave.leaveType)}
                  onMouseLeave={() => setHoveredReason(null)}
                >
                  {leave.reason}
                </td>

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

            </>
          ))}
        </tbody>

        {hoveredReason && (
          <div className="fixed inset-0 flex items-center justify-center z-50">

            {/* Blur background layer */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            {/* Popup box */}
            <div className="relative bg-white p-4 border border-black shadow-lg w-[300px] z-50">
              good work
            </div>

          </div>
        )}

      </table>
    </div>



  );
};

export default LeaveTable;


{/* <td className="p-2 max-w-[200px] truncate relative group">{leave.reason}
              <p className="hidden group-hover:block text-lg text-black border border-gray-600 p-2 absolute top-0 right-0 bg-white shadow-lg z-10">This is very important reason</p>
            </td> */}