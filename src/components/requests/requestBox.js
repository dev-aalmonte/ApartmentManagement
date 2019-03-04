import React, { Component } from 'react';

import RequestBoxItem from './requestBoxItem';

class RequestBox extends Component {
    render() {
        return(
            <div className='request-box'>
                <RequestBoxItem count={3} title='Pending'/>
                <RequestBoxItem count={1} title='In-Progress'/>
                <RequestBoxItem count={0} title='Complete'/>
            </div>
        )
    }
}

export default RequestBox;