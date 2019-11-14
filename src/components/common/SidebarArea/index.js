import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNote } from "../../../store/actions/notes";

class SidebarArea extends Component {
  changeSelectedNote = data => {
    this.props.selectedNote(data);
  };

  renderNotes() {
    return this.props.notes.map(note => (
      <div className="sideBarItem">
        <h3 className="name" onClick={() => this.changeSelectedNote(note)}>{note.title}</h3>
        <i class="fas fa-chevron-circle-right icon"></i>
      </div>
    ));
  }

  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 padding_hor_0">
        <div className="sideBar">
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => ({
  notes: notes.data
});

const mapDispatchToProps = dispatch => ({
  selectedNote: data => dispatch(selectedNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarArea);
