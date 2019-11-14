import React, { Component } from 'react';
import DraftEditor from '../DraftEditor';

class ContentArea extends Component {
    render() {
        return (
            <div className="col-xs-8">
                <DraftEditor />
            </div>
        );
    }
}

export default ContentArea