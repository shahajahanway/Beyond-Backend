import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formValues, setformValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setformValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    setformValues({
      title: "",
      description: "",
    });
  };

  return (
    <div className="h-screen p-5 fles flex-col gap-5 bg-black text-white">
      <h1 className="text-3xl font-semibold ">Notes app</h1>

      <form
        onSubmit={handleSubmit}
        className="w-70 border gap-5 border-white rounded-xl p-4 flex flex-col"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          type="text"
          className="p-2 outline-none text-xl rounded border text-white border-white"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          name="description"
          value={formValues.description}
          type="text"
          className="p-2 outline-none text-xl rounded border text-white border-white"
          placeholder="Description"
          minLength={20}
          required
        />

        <button className=" bg-blue-600 text-white p-2 rounded cursor-pointer ">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default App;
