import React, {useEffect, useState} from "react";
import {getAllNotes} from '../client';
import NoteList from "./NoteList";


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
            <NoteList notes={notes}/>
        </div>
    )
}