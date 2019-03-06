import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

 class RequestBoxItem extends Component {
    handleClick = (title) => {
        this.props.changeSelectedRequestType(title);
    }

    render(){
        const { count, title, icon } = this.props;
        const className = `request-box-item ${this.props.selectedRequestType == title ? 'request-box-item-active' : 'request-box-item-inactive'}`;
        return (
            <div onClick={() => this.handleClick(title)} className={className}>
                <div className='request-box-item__count'>{count}</div>
                <div className='request-box-item__title'>{title}</div>
                <div className='request-box-item__point'></div>
                <i className={`${icon} request-box-item__icon`}></i>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { selectedRequestType } = state.request;
    return { selectedRequestType }; 

}

RequestBoxItem = connect(mapStateToProps, actions)(RequestBoxItem);

export default RequestBoxItem;