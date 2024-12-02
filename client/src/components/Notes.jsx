import React from "react";

const Notes = (props) => {
  return (
    <div className="bg-yellow-300 mx-5 my-10 px-10 py-7 rounded-md">
      <h1>{props.value.title}</h1>
      <h2>{props.value.description}</h2>
      <button className="bg-red-400 py-1 my-3 px-5 rounded-lg">Delete</button>
    </div>
  );
};

export default Notes;
