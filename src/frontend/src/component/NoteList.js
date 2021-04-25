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
        <section id="note-list"
                 className="container rounded"

        >
            {notes.map((note) =>
                <div key={note.id}>
                    <Note note={note} delNote={delNote}/>
                </div>)}
        </section>
    )
}