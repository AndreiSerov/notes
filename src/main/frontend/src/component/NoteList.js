import React from "react";
import Note from "./Note";

export default function NoteList({notes = []}) {
    return (
        <div>
            {notes.map((note) => <div><Note note = {note}/></div>)}
        </div>
    )
}