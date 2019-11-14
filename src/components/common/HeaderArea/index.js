import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <h3 className="navbar-brand" href="#">Notes</h3>
                </div>

                <ul className="nav navbar-nav navbar-righ">
                    <button type="button" className="btn btn-outline-primary">+Create</button>
                </ul>
            </nav>
        );
    }
}

export default index;
