import React, { useState } from "react";
import "./event.css";
import axios from "axios";
import { adminLocalhost } from "../localhostUrl";


const CreateEventModal = ({ setOpen, setEvents, updateOpen, setUpdateOpen, selectedEvent }) => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: ""
  });

  // admin token
  const mytoken = localStorage.getItem("adminToken");
  console.log("create event token:", mytoken);
  if (!mytoken) {
    console.warn("adminToken is missing from localStorage");
  }

  const handleChange = e => {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const eventUrl = `${adminLocalhost}/api/v2/eventRoute/event`

  const createEvent = async () => {
    console.log("Events", form);
    console.log("Creating event", eventUrl, "token present?", Boolean(mytoken));

    try {
      const res = await axios.post(
        eventUrl,
        {
          title: form.title,
          description: form.description,
          eventDate: form.date,
          place: form.location,
          time: form.time,
        },
        {
          headers: {
            Authorization: `Bearer ${mytoken}`,
          },
        }
      );

      console.log("Create event response:", res);
      setEvents((prev) => [...prev, res.data]);
      setOpen(false);
    } catch (err) {
      console.error("Create event failed:", err.response || err);
      if (err.response) {
        console.error("request headers:", err.response.config.headers);
        console.error("response data:", err.response.data);
      }
      alert("Failed to create event. Check console/network for details.");
    }
  };
// conditionally passing date to update form for update api

const updateForm ={}
if(form.title){
  updateForm.title = form.title;
}
if(form.date){
  updateForm.eventDate = form.date;
}
if(form.location){
  updateForm.place = form.location;
}   
if(form.time){
  updateForm.time = form.time;
}


const updateEvent = async () => {
  const updateUrl = `${adminLocalhost}/api/v2/eventRoute/updateEvent/${selectedEvent}`;
  console.log("Updating event", updateForm, "token present?", Boolean(mytoken), updateUrl);
  axios.put(
    updateUrl,
    updateForm, 
    {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },    
    })
    .then((res) => {
      console.log("Update event response:", res);
      setUpdateOpen(false);
    })
}

  const removeForm = () => {
    setOpen(false);
    setUpdateOpen(false);
  }

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-6 rounded-xl w-96">

        <h2 className="text-xl font-bold mb-4">
          Create Event
        </h2>

        <input
          name="title"
          placeholder="Title"
          className="border w-full p-2 mb-2"
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          className="border w-full p-2 mb-2"
          onChange={handleChange}
        />

        <input
          name="time"
          type="time"
          className="border w-full p-2 mb-2"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          className="border w-full p-2 mb-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3">

          <button
            className="px-4 py-2 border"
            // onClick={() => setOpen(false)}
            onClick={removeForm}
          >
            Cancel
          </button>

          
           {updateOpen ? (<button
            className="bg-blue-500 text-white px-4 py-2 rounded create"
            onClick={updateEvent}

            
          >
            Update
          </button>)
          :
          (<button
            className="bg-blue-500 text-white px-4 py-2 rounded create"
            onClick={createEvent}
          >
            Create
          </button>)}

         

        </div>

      </div>

    </div>

  );
};

export default CreateEventModal;