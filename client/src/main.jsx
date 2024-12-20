import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login.jsx";
import Signin from "./components/Signup.jsx";
import Task from "./components/Task.jsx";
import DashBoard from "./components/DashBoard.jsx";
import NoteWritting from "./components/NoteWritting.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signin />} />

      <Route path="/" element={<App />} />
      <Route path="/tasks" element={<Task />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/notes" element={<NoteWritting />} />
    </Routes>
  </BrowserRouter>
);
