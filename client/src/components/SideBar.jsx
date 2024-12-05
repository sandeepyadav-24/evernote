import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { IoMdAdd } from "react-icons/io";

const SideBar = () => {
  const Navigate = useNavigate();
  const clickHandler = () => {
    localStorage.removeItem("Authentication");
    Navigate("/");
    location.reload();
  };
  return (
    <div className="w-1/5 bg-white px-7 ">
      {/** First Part  */}
      <div className="my-10 border-b-[1px] py-2 ">
        <Link to={"/"}>
          <img src="https://evernote.com/_next/static/media/evernote-logo.c443c65f.svg" />
        </Link>
      </div>
      {/** Second Part */}
      <div>
        <div className="menu">
          <div className="text-[#8999B0] my-2">MENU</div>
          <div className="text-[#485A76]">
            <div className="my-1">
              <Link to={"/dashboard"}>DashBoard</Link>
            </div>
            <div className="my-1">
              <Link to={"/tasks"}>tasks</Link>
            </div>
          </div>
        </div>
        <div className="notes my-3">
          <div className="flex flex-row justify-between">
            <div className="text-[#8999B0]">NOTES</div>
            <div>
              <Link to={"/notes"}>
                <IoMdAdd className="text-xl" />
              </Link>
            </div>
          </div>

          <div>
            <div>Message 1</div>
            <div>Message 2</div>
            <div>Message 3</div>
            <div>Message 4</div>
            <div>Message 5</div>
          </div>
        </div>
      </div>
      {/** Third Part */}
      <div>
        <div>Setting</div>
        <div onClick={clickHandler}>Log out</div>
      </div>
    </div>
  );
};

export default SideBar;
