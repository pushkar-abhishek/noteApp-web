import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="content">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default index;
