import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNote } from '../../../store/actions/notes';

class SidebarArea extends Component {

    changeSelectedNote = (data) => {
        this.props.selectedNote(data)
    }

    renderNotes() {
        return this.props.notes.map(note => <h3 onClick={() => this.changeSelectedNote(note)}>{note.title}</h3>)

    }

    render() {
        return (
            <div className="col-xs-4 sidenav">
                {
                    this.renderNotes()
                }
            </div>
        );
    }
}

const mapStateToProps = ({ notes }) => ({
    notes: notes.data
})

const mapDispatchToProps = dispatch => ({
    selectedNote: (data) => dispatch(selectedNote(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(SidebarArea);

