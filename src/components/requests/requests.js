import React, { Component } from 'react';
import RequestItem from './requestItem';

class Requests extends Component {
    render() {
        return(
            <div className='requests'>
                <RequestItem/>
                <RequestItem/>
                <RequestItem/>
            </div>
        )
    }
}

export default Requests;