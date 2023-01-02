import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<UsersList></UsersList>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
