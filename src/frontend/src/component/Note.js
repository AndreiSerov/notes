import React, {Component} from "react";

export default class Note extends Component {
    state = {
        isOpen: false
    }


    // constructor(props, context) {
    //     super(props, context);
    //     this.deleteNote = this.deleteNote.bind(this)
    // }

    render() {
        const {note} = this.props
        const body = this.state.isOpen &&
            <div>
                {note.body}
                {this.showHHMM(note.createDate)}
                <button
                    type="button"
                    onClick={this.deleteNote}>Delete</button>
                {/*should be callback*/}
            </div>
        return (
            <section >
                <h2 className="note"
                    onClick={this.changeState}>
                    {note.header}
                    {/*<button onClick={this.changeState}>*/}
                    {/*    {this.state.isOpen ? 'close' : 'open'}*/}
                    {/*</button>*/}
                </h2>
                {body}
            </section>
        )
    }


    changeState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showHHMM(time){
        const date = new Date(time)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    deleteNote = () => {
        this.props.delNote(this.props.note.id)
        // console.log(this)
    }
}