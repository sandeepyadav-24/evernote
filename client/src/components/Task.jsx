import React from "react";
import SideBar from "./SideBar";

const Task = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="w-4/5">This is a Task Corner</div>
    </div>
  );
};

export default Task;
