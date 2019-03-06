import React, { Component } from 'react';
import { connect } from 'react-redux';

import RequestBoxItem from './requestBoxItem';

class RequestBox extends Component {
    render() {
        return(
            <div className='request-box'>
                <RequestBoxItem icon='fas fa-exclamation-triangle' count={this.props.pendingCount} title='Pending'/>
                <RequestBoxItem icon='fas fa-wrench' count={this.props.progressCount} title='In-Progress'/>
                <RequestBoxItem icon='fas fa-check-square' count={this.props.completeCount} title='Complete'/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { requests } = state.request;

    var pendingCount = 0;
    var progressCount = 0;
    var completeCount = 0;

    requests.map(request => {
        switch (request.status) {
            case 'Pending':
            case 'pending':
                pendingCount++;
                break;

            case 'In-Progress':
            case 'in-progress':
                progressCount++;
                break;

            case 'Complete':
            case 'complete':
                completeCount++;
                break;
        }
    })

    return {
        pendingCount,
        progressCount,
        completeCount
    }
}

RequestBox = connect(mapStateToProps)(RequestBox);

export default RequestBox;