import React, {Component} from "react";
import {addNewNote} from "../client";

export default class NewNote extends Component {
    state = {
        isOpen: false
    }

    actions = {addNewNote}

    render() {
        const body = this.state.isOpen &&
            <form>
                <input id="noteHeader"
                       placeholder="Note Header"
                       onChange={this.handleHeaderChange}/>
                <textarea id="noteBody"
                          placeholder="Note Body"
                          rows="3"
                          onChange={this.handleBodyChange}/>
                <button
                    type="button"
                    onClick={this.createNewNote}>Add
                </button>
            </form>
        return (
            <section>
                <div>
                    <button type="button"
                            onClick={this.changeState}>Add Note
                    </button>
                </div>
                {body}
            </section>
        )
    }

    createNewNote = async () => {
        const note = {
            'header': this.state.noteHeader,
            'body': this.state.noteBody
        }
        console.log(note)
        await this.props.addNote(note)
    }

    changeState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleHeaderChange = (event) =>
        this.setState({"noteHeader": event.target.value})


    handleBodyChange = (event) =>
        this.setState({"noteBody": event.target.value})

}
