import React, { useEffect, useRef, useState } from "react";
import CreateEventModal from "./eventForm";
import EventTable from "./eventTable";
import Side from "../side/sidebar";
import "./event.css"



const Events = ({removeItem, sideRef, showItem}) => {

  const [events, setEvents] = useState([
    {
      title: "Dinner",
      date: "10/02/2020",
      time: "09:20",
      location: "Phase 3 Chowk",
      participants: "30"
    },
    {
      title: "Breakfast",
      date: "15/03/2020",
      time: "10:00",
      location: "Board Bazar",
      participants: "40"
    }
  ]);
  const [open, setOpen] = useState(false);

  //   useEffect(() => {

  //     axios.get("/api/events")
  //       .then(res => setEvents(res.data));

  //   }, []);

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

        <EventTable events={events} setEvents={setEvents} />

        {open && (
          <CreateEventModal
            setOpen={setOpen}
            setEvents={setEvents}
          />
        )}
      </div>



    </div>

  );
};

export default Events;