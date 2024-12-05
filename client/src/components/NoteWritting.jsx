import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteWritting = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const payload = {
    title: title,
    value: value,
  };
  const url = "http://localhost:3000/api/notes";

  const clickHandler = async () => {
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: "Bearer " + localStorage.getItem("Authentication"),
        },
        body: JSON.stringify(payload),
      });
      if (!result.ok) {
        const errorData = await result.json();
        console.error("Error Data", errorData);
        return;
      }
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="w-4/5 bg-[#F4F4F4]">
        <div className="flex justify-between p-3">
          <div>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="px-5 py-2 rounded-md"
            ></input>
          </div>
          <button
            className="bg-blue-300 px-10 py-1 rounded-md"
            onClick={clickHandler}
          >
            Save
          </button>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default NoteWritting;
