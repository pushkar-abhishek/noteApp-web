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
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>

                <ul className="nav navbar-nav navbar-righ">
                    <li><button>create</button></li>
                </ul>

            </nav>
        );
    }
}

export default index;
