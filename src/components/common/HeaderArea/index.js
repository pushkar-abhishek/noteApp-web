import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unSelectNote } from '../../../store/actions/notes';

class HeaderArea extends Component {

    handleCreateNote = () => {
        this.props.unSelectNote()
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <h3 className="navbar-brand" href="#">Notes</h3>
                </div>

                <ul className="nav navbar-nav navbar-righ">
                    <button
                        onClick={this.handleCreateNote}
                        type="button"
                        className="btn btn-outline-primary">+Create</button>
                </ul>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    unSelectNote: () => dispatch(unSelectNote())
})

export default connect(null, mapDispatchToProps)(HeaderArea);
