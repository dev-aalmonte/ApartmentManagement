import React, { Component } from 'react';

import Button from '../button';
import RequestBox from './requestBox';
import Requests from './requests';

class RequestGrid extends Component {
    handleAddRequest = () => {
        this.props.history.push('/request/new');
    }

    render() {
        return(
            <div className='request-grid'>
                <Button className='request-grid__button'  icon='fas fa-plus' callback={() => this.handleAddRequest()}/>
                <RequestBox/>
                <Requests/>
            </div>
        )
    }
}

export default RequestGrid;