import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../reducers/noteReducer";
import { addNote } from "../actions/actions";
import { PersonList } from "./PersonList";
import { PersonForm } from "./PersonForm";
import { PersonAge } from "./PersonAge";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  // console.log( notes);

  return (
    <div>
      <div>
        {/* <NewNoteInput addNote={onAddNote} /> */}
        {/* <ul>
          {notes.map((note) => {
            return <li key={note}>{note}</li>;
          })}
        </ul> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <PersonForm />
          </div>
          <div className="col-2">
            <PersonAge />
          </div>

          <div className="col-7">
            <PersonList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
