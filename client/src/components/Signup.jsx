import React, { useState } from "react";
import Navbar from "./Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:3000/api/signup";
  const payload = {
    email: email,
    password: password,
  };
  const clickHandler = async () => {
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!result.ok) {
        // If the response status is not ok (e.g., 400, 500)
        const errorData = await result.json();
        console.error("Error response:", errorData);
        //return;
      }

      const data = await result.json(); // Parse JSON only if the response is ok
      console.log("Success:", data);
      //console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" flex flex-row ">
        <div className="w-1/2 px-20 py-20 ">
          <div className="mx-10 my-10 flex flex-col">
            <div className=" my-5">
              <h1 className="text-5xl my-3 font-semibold">
                Welcome to Evernote!
              </h1>
              <h2 className="text-lg mx-20">Sign up and start taking notes.</h2>
            </div>
            <input
              className="email py-3 px-2 my-3 rounded-md  bg-[#E7F0FE] border-[#CCCCCC] border-[1px] w-full  "
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              className="password py-3 px-2 rounded-md  bg-[#E7F0FE] border-[#CCCCCC] border-[1px] my-3"
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
        <div className="w-1/2 py-60 px-10">
          <h1 className="text-5xl font-lg font-serif my-2 mx-5">
            Work.School.Life
          </h1>
          <h1 className="text-5xl font-semibold font-serif">
            Remember everything
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
