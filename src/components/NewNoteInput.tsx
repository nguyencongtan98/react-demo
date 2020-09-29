import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const upDateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  

  const onAddNote = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input onChange={upDateNote} type="text" name="note" placeholder="NOTE" />
      <button onClick={onAddNote}>ADD NOTE</button>
    </div>
  );
};
