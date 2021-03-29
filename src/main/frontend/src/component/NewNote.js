import React, {Component} from "react";
import {addNewNote} from "../client";

export default class NewNote extends Component {
    state = {
        isOpen: false
    }

    render() {
        const body = this.state.isOpen &&
            <div>
                <input id="noteHeader"
                       placeholder="Note Header"
                       onChange={this.handleHeaderChange}/>
                <textarea id="noteBody"
                          placeholder="Note Body"
                          onChange={this.handleBodyChange}/>
                <button onClick={this.createNewNote}>Add</button>
            </div>
        return (
            <section>
                <div onClick={this.changeState}>Add Note</div>
                {body}
            </section>
        )
    }

    createNewNote = () => {
        const note = {
            'header': this.state.noteHeader,
            'body': this.state.noteBody
        }
        console.log(note);
        addNewNote(note).then(res => console.log(res))
    }

    changeState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleHeaderChange = (event) => {
        this.setState({"noteHeader": event.target.value})
    }

    handleBodyChange = (event) => {
        this.setState({"noteBody": event.target.value})
    }
}
