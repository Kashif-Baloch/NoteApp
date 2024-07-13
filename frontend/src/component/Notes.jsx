import { useContext, useEffect, React, useState } from "react";
import noteContext from "../context/noteContext";
import Notesitems from "./Notesitems";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Notes = () => {
  let navig = useNavigate();
  let data = useContext(noteContext);
  const { fetcchNotes, state, editNote } = data;
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetcchNotes();
    } else {
      navig("/login", { replace: true });
    }
  }, []);

  const closeIte = () => {
    setShowModal(false);
  };

  const refOvm = (note) => {
    setValue({
      id: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
    setShowModal(true);
  };

  const runHandler = async (e) => {
    setShowModal(false);
    await editNote(value.id, value.etitle, value.edescription, value.etag);
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      {showModal && (
        <Modal
          runHandler={runHandler}
          onChange={onChange}
          closeIte={closeIte}
          value={value}
        />
      )}

      <div>
        {state.length < 1 ? (
          <h1 className="font-bold text-2xl text-center mt-10">
            No Notes to Display
          </h1>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 text-center my-20 px-8">
            {state.map((curElem) => {
              return (
                <Notesitems notes={curElem} refOvm={refOvm} key={curElem._id} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
