import React, {useContext, useEffect} from "react";
import Note from "./Note";
import {NotesContext} from "../context/NoteContext";

export default function NoteList() {
    // const [open, setOpen] = useState(false)
    //
    // setOpen((prev) => !prev)
    const {
        state: {notes},
        actions: {getNotesList, delNote}
    } = useContext(NotesContext)

    useEffect(
        () => {
            getNotesList()
        }, []
    )

    return (
        <div>
            {notes.map((note) => <div><Note note={note} delNote={delNote}/>
            </div>)}
        </div>
    )
}