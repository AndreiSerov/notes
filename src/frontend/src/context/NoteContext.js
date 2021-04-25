import React, {useCallback, useState} from 'react';
import {addNewNote, deleteNote, getAllNotes} from "../client";

const NotesContext = React.createContext({});

const NotesContextProvider = ({children}) => { // children - special props
    const [state, setState] = useState({notes: []});

    const getNotesList = useCallback(async () => {
            const data = await getAllNotes();
            const notes = await data.json();

            setState((prev) => ({
                ...prev,
                notes,
            }));
        }, []
    )

    const addNote = useCallback(async (note) => {
            const data = await addNewNote(note)
            const json = await data.json()

            setState((prev) => ({
                ...prev,
                notes: [json, ...prev.notes],
            }));

        }, []
    )

    const delNote = useCallback(async (noteId) => {
            const data = await deleteNote(noteId)
            // const json = await data.json()

            setState((prev) => ({
                    ...prev,
                    notes: prev.notes.filter(note => note.id !== noteId)
                })
            )
        }, []
    )

    const actions = {getNotesList, addNote, delNote}

    return (
        <NotesContext.Provider value={{state, actions}}>
            {children}
        </NotesContext.Provider>
    )
}

export {NotesContext, NotesContextProvider};