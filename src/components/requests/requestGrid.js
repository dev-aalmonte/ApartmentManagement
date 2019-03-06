import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';
import RequestBox from './requestBox';
import Requests from './requests';

class RequestGrid extends Component {
    handleAddRequest = () => {
        this.props.history.push('/request/new');
    }

    componentDidMount() {
        this.props.fetchRequests()
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

RequestGrid = connect(null, actions)(RequestGrid);

export default RequestGrid;