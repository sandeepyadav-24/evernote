import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import { MdAdd } from "react-icons/md";
import SideBar from "./SideBar";

const Homepage = () => {
  const [todos, setTodos] = useState([
    { title: "Title", description: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const clickahndler = () => {
    setTodos([...todos, { title: title, description: desc }]);
    console.log(todos);
  };

  return (
    <div className="bg-[#F8F6F1] ">
      <div className="bg-slate-300 h-screen flex flex-row">
        {/**  LEFT SIDE */}
        <SideBar />

        <div className="w-4/5 ">
          <h1 className="my-40 mx-20 text-7xl font-bold">
            Project Manager Application
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

{
  /**<div className="NotesInput mx-40 bg-white rounded-md py-10  px-20 flex flex-row justify-between">
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Title"
              className="mx-5"
              value={title}
            ></input>
            <input
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              type="text"
              placeholder="Description"
              value={desc}
            ></input>
          </div>
          <button
            onClick={clickahndler}
            className="bg-green-400 px-2 py-2  mx-5 rounded-full"
          >
            <MdAdd className="text-3xl" />
          </button>
        </div> 
        <h1 className="font-bold text-2xl mx-10">Notes</h1>
        <div className="AllNotes flex flex-row flex-wrap">
          {todos.map((e, index) => {
            return <Notes value={e} key={index} />;
          })}
        </div>*/
}
