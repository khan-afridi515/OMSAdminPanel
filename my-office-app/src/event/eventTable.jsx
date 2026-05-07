import React, { useEffect } from "react";
import "./event.css";
import { adminLocalhost } from "../localhostUrl";
import axios from "axios";

const EventTable = ({ events, setEvents, updateTable, setUpdateOpen }) => {

 
  const mytoken = localStorage.getItem("adminToken");
 

  const deleteEvent = async (id) => {
     const dltUrl = `${adminLocalhost}/api/v2/eventRoute/dltEvent/${id}`;
    console.log(id);
    console.log("Delete event token:", mytoken);
    try {
      const response = await axios.delete(dltUrl, {
        headers: {
          Authorization: `Bearer ${mytoken}`
        }
      });
      console.log("Event deleted:", response.data);
      response.data && alert("Event deleted successfully");
      // Remove the deleted event from the local state
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };



  return (

    <div className="w-full overflow-x-auto mt-8">
      <table className="min-w-[600px] w-full border shadow text-sm">

        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Time</th>
            <th className="p-2 text-left">Location</th>
            <th className="p-2 text-left">Participants</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="border-t text-left">

              <td className="p-2 whitespace-nowrap truncate max-w-[150px]">{event.title}</td>
              <td className="p-2 whitespace-nowrap">{event.eventDate?.slice(0, 10)}</td>
              <td className="p-2 whitespace-nowrap">{event.time}</td>
              <td className="p-2 whitespace-nowrap truncate max-w-[120px]">{event.place}</td>
              <td className="p-2 whitespace-nowrap">-</td>

              <td className="p-2 flex justify-left gap-2">
                 <button
                  className="bg-green-500 text-white px-2 py-1 cursor-pointer rounded text-xs"
                  onClick={() => updateTable(event._id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  onClick={() => deleteEvent(event._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>

  );
};

export default EventTable;