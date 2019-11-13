import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row content">
                {this.props.children}
            </div>
        );
    }
}

export default index;
