import { useContext, React } from "react";
import noteContext from "../context/noteContext";

const Notesitems = ({ notes, refOvm }) => {
  let data = useContext(noteContext);
  const { deleteNote } = data;

  return (
    <div className="text-center">
      <section className="body-font shadow-2xl mt-8 h-[450px] overflow-y-auto rounded-2xl transition-all duration-[.75s] hover:-translate-y-5">
        <div className="container px-5 pt-24 mx-auto flex items-center justify-center">
          <div className="flex flex-wrap">
            <div className="p-2 flex flex-col items-center justify-center text-center">
              <span className="inline-block py-1 px-2 rounded bg-pink-500 text-black text-opacity-75 text-xs font-medium tracking-widest">
                {notes.tag}
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-black mt-8 mb-6">
                {notes.title}
              </h2>
              <p className="leading-relaxed mb-8 text-black">
                {notes.description}
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 flex gap-6 items-center justify-center text-center">
          <i
            className="fa-solid fa-trash fa-2xl"
            onClick={() => {
              deleteNote(notes._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square fa-2xl"
            onClick={() => {
              refOvm(notes);
            }}
          ></i>
        </div>
      </section>
    </div>
  );
};

export default Notesitems;
