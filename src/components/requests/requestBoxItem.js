import React, { Component } from 'react';

 class RequestBoxItem extends Component {
    render(){
        const { count, title } = this.props;
        return (
            <div className='request-box-item'>
                <div className='request-box-item__count'>{count}</div>
                <div className='request-box-item__title'>{title}</div>
                <div className='request-box-item__point'></div>
            </div>
        )
    }
}
export default RequestBoxItem;