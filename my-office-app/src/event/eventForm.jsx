import React, { useState } from "react";
import "./event.css";
// import axios from "axios";

const CreateEventModal = ({ setOpen, setEvents }) => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: ""
  });

  const handleChange = e => {
    console.log(e);
    // setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createEvent = async () => {


    console.log("My event has been created");
    // const res = await axios.post("/api/admin/event", form);

    // setEvents(prev => [...prev, res.data]);

    // setOpen(false);
  };

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
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded create"
            onClick={createEvent}
          >
            Create
          </button>

        </div>

      </div>

    </div>

  );
};

export default CreateEventModal;