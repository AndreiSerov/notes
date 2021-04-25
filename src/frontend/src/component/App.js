import React from "react";
import NoteList from "./NoteList";
import NewNote from "./NewNote"
import {NotesContext, NotesContextProvider} from "../context/NoteContext";

export default function App() {

    // const [notes, setNote] = useState([])
    //
    // // useEffect(
    // //     () => {
    // //         getAllNotes().then(
    // //             res => {
    // //                 console.log(res)
    // //                 return res.json()
    // //             }
    // //         ).then(
    // //             setNote
    // //         )
    // //     }, []
    // // )

    // console.log(`This is notes from back: ${notes}`)
    return (
        <NotesContextProvider>
            <div>
                <h1>NoteList</h1>
                <NotesContext.Consumer>
                    {({actions: {addNote}}) =>
                        <NewNote addNote={addNote}/>}
                </NotesContext.Consumer>
                <NoteList/>
            </div>
        </NotesContextProvider>
    )
}