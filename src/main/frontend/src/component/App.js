import React, {useEffect, useState} from "react";
import {getAllNotes} from '../client';
import NoteList from "./NoteList";
import NewNote from "./NewNote"


export default function App() {

    const [notes, setNote] = useState([])

    useEffect(
        () => {
            getAllNotes().then(
                res => {
                    console.log(res)
                    return res.json()
                }
            ).then(
                setNote
            )
        }, []
    )

    // console.log(`This is notes from back: ${notes}`)
    return (
        <div>
            <h1>NoteList</h1>
            <NewNote>+ Note</NewNote>
            <NoteList notes={notes}/>
        </div>
    )
}