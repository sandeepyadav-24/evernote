import React from "react";
import SideBar from "./SideBar";

const DashBoard = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="w-4/5">THis is a Dahsboard</div>
    </div>
  );
};

export default DashBoard;
