import React, {Component} from "react";

class Note extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {note} = this.props
        const body = this.state.isOpen &&
            <div>
                {note.body}
                {new Date(note.createDate).toLocaleTimeString()}
            </div>
        return (
            <section>
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
}

export default Note
