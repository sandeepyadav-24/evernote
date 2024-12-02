import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = () => {
    console.log({
      email: email,
      password: password,
    });
  };
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="flex flex-row">
        <div className="w-1/2 px-20 py-20">
          <div className="mx-10 my-10  ">
            <div className="my-5">
              <h1 className="text-5xl px-28 font-semibold my-2 ">Sign in</h1>{" "}
              <h1 className="text-lg px-12">
                to continue to your Evernote account
              </h1>
            </div>
            <div className="flex flex-col">
              <input
                className="email py-3 px-2 my-3 rounded-md  bg-[#E7F0FE] border-[#CCCCCC] border-[1px] w-full   "
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.tagert.value);
                }}
              ></input>
              <input
                className="password py-3 px-2 rounded-md  bg-[#E7F0FE] border-[#CCCCCC] border-[1px] my-3 "
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button
                onClick={clickHandler}
                className="bg-[#4D63FF] py-2 my-3 text-white px-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-60 px-10">
          <h1 className="text-5xl font-lg font-serif my-2 mx-5">
            Your.ideas.matter
          </h1>
          <h1 className="text-5xl font-semibold font-serif">
            Log in to capture them
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
