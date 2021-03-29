import React, {Component} from "react";

export default class Note extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {note} = this.props
        const body = this.state.isOpen &&
            <div>
                {note.body}
                {this.showHHMM(note.createDate)}
            </div>
        return (
            <section onClick={this.changeState}>
                <h2>
                    {note.id}
                    {note.header}
                    <button onClick={this.changeState}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
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
}
