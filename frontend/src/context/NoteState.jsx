import { useState } from "react";
import NoteContext from "./noteContext";

let NoteState = (props) => {
  const host = "http://localhost:5000/api";
  let [state, setState] = useState([]);

  //Fetching notes from the database
  const fetcchNotes = async () => {
    const response = await fetch(`${host}/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    setState(result.fetNotes);
  };

  //Adding notes from the database
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = await response.json();
    fetcchNotes();
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = await response.json();
    fetcchNotes();
  };

  //Deleting notes from the database
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const fNote = state.filter((elem) => {
      return elem._id !== id;
    });
    setState(fNote);
  };

  return (
    <NoteContext.Provider
      value={{ state, addNote, deleteNote, fetcchNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
