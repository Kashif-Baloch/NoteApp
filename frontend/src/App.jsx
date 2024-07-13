import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import NoteState from "./context/NoteState";
import Note from "./component/Note";
import Login from "./component/Login";
import Singin from "./component/Singin";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/note" element={<Note />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Singin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
