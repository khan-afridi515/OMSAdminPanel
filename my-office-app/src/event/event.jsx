import React, { useEffect, useRef, useState } from "react";
import CreateEventModal from "./eventForm";
import EventTable from "./eventTable";
import Side from "../side/sidebar";
import "./event.css"
import axios from "axios";
import { adminLocalhost } from "../localhostUrl";


const Events = ({removeItem, sideRef, showItem}) => {

  const [events, setEvents] = useState([]);

  const allEventUrl = `${adminLocalhost}/api/v2/eventRoute/getEvents`

  useEffect(() => {
    // fetching above url through axios
    axios.get(allEventUrl)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.wholeEvents);
        setEvents(res.data.wholeEvents);

      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  

  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function updateTable(id){
    setUpdateOpen(true);
    setSelectedEvent(id);

    
  }


  return (

    <div className="relative w-[100%] flex">

      
     

      <div className="sm:static fixed top-0 left-0 z-50 h-screen sm:w-[20%] w-[80%] shadow-lg sm:block hidden flex flex-col" ref={sideRef}>
        <Side removeItem={removeItem}/>
      </div>

      <div className="relative sm:w-[80%] w-[100%] px-6 py-20">
      <div className="absolute top-4 left-4 sm:hidden block">
      <i className="fa-solid fa-bars text-2xl" onClick={showItem} />
      </div>
      
        <div className="flex justify-between mb-6">

          <h1 className="text-2xl font-bold">
            Events
          </h1>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer create"
            onClick={() => setOpen(true)}
          >
            Create Event
          </button>

        </div>

        <EventTable events={events} setEvents={setEvents} updateTable={updateTable}/>

        {open || updateOpen && (
          <CreateEventModal
            setOpen={setOpen}
            setEvents={setEvents}
            updateOpen={updateOpen}
          />
        )}
      </div>



    </div>

  );
};

export default Events;