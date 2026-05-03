import React, { useEffect } from "react";
import "./event.css";
import { adminLocalhost } from "../localhostUrl";
import axios from "axios";

const EventTable = ({ events, setEvents }) => {

  const allEventUrl = `${adminLocalhost}/api/v2/eventRoute/getEvents`

  useEffect(() => {
    // fetching above url through axios
    axios.get(allEventUrl)
      .then((res) => {
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err);
      })
  })

  const deleteEvent = async (id) => {
    console.log(id);
  };

  console.log(events);

  return (

    <div className="w-full overflow-x-auto mt-8">
      <table className="min-w-[600px] w-full border shadow text-sm">

        <thead className="bg-gray-100">
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
            <tr key={index} className="border-t text-center">

              <td className="p-2 whitespace-nowrap truncate max-w-[150px]">{event.title}</td>
              <td className="p-2 whitespace-nowrap">{event.date?.slice(0, 10)}</td>
              <td className="p-2 whitespace-nowrap">{event.time}</td>
              <td className="p-2 whitespace-nowrap truncate max-w-[120px]">{event.location}</td>
              <td className="p-2 whitespace-nowrap">{event.participants?.length}</td>

              <td className="p-2 flex justify-center gap-2">
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