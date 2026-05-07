import React, { use, useEffect, useState } from 'react'
import { adminLocalhost } from '../localhostUrl';
import axios from 'axios';


const History = () => {



  const attendanceData = [
    {
      name: "Azix Ullah",
      date: "10 Apr 2026",
      time: "09:15 AM",
      status: "present"
    },
    {
      name: "Ali Khan",
      date: "10 Apr 2026",
      time: "09:40 AM",
      status: "late"
    },
    {
      name: "Sara Ahmed",
      date: "10 Apr 2026",
      time: "-",
      status: "absent"
    },
    {
      name: "Usman Tariq",
      date: "09 Apr 2026",
      time: "09:05 AM",
      status: "present"
    },
    {
      name: "Hina Malik",
      date: "09 Apr 2026",
      time: "-",
      status: "leave"
    }
  ];

  // hit git api through axios and bearer token and get the data and set it to state and then map it in the table

  const [adattendanceData, setAdattendanceData] = useState([]);
  const adminToken = localStorage.getItem("adminToken");

  console.log("Admin Token:", adminToken); // Debugging line to check the token value

  const empAttandanceUrl = `${adminLocalhost}/api/v1/attandance/alluserAttandance`;

  useEffect(() => {
    axios.get(empAttandanceUrl, {
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    })
      .then(response => {
        setAdattendanceData(response.data.attandance);
        console.log(response.data.attandance);

      })
      .catch(error => {
        console.error("Error fetching attendance data:", error);
      });
  }, [adminToken]);



  const getStatusStyle = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-600";
      case "absent":
        return "bg-red-100 text-red-600";
      case "leave":
        return "bg-yellow-100 text-yellow-600";
      case "late":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div>
      <div className="p-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mt-6">

          <h2 className="text-2xl font-bold text-left py-4 border-b ">
            📊 Employee Attendance History
          </h2>

          <div className="overflow-x-auto">
            {

            }
            {
              adattendanceData && adattendanceData.length > 0 ? (
                <table className="w-full text-left border-collapse">

                  {/* Header */}
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                      <th className="p-4">👤 Employee</th>
                      <th className="p-4">📅 Date</th>
                      <th className="p-4">⏰ Time</th>
                      <th className="p-4">📌 Status</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody>
                    {adattendanceData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-4 font-medium text-gray-800">
                          {item.name}
                        </td>

                        <td className="p-4"> {new Date(item.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        </td>

                        <td className="p-4">{new Date(item.date).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}</td>

                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getStatusStyle(item.status)}`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">

                  <div className="text-6xl mb-4">📭</div>

                  <h2 className="text-xl font-semibold text-gray-700">
                    No Attendance Data Found
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">
                    There are no attendance records available right now.
                  </p>

                </div>
              )
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default History
