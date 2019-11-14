import React, { Component } from 'react';
import { connect } from 'react-redux';

class SidebarArea extends Component {
    render() {
        return (
            <div className="col-xs-4 sidenav">
                {
                    this.props.notes.map(note => <h3>{note.title}</h3>)
                }
            </div>
        );
    }
}

const mapStateToProps = ({ notes }) => ({
    notes
})
export default connect(mapStateToProps)(SidebarArea);