import React, { Component } from 'react';

import Icon from '../icon';

class RequestItem extends Component {
    render() {
        return (
            <div className='request-item'>
                <Icon icon='fas fa-exclamation-triangle'/>
            </div>
        )
    }
}

export default RequestItem;