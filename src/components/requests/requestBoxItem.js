import React, { Component } from 'react';

 class RequestBoxItem extends Component {
    handleClick = () => {
        console.log("Trying to select this box");
    }

    render(){
        const { count, title } = this.props;
        return (
            <div onClick={() => this.handleClick()} className='request-box-item request-box-item-inactive'>
                <div className='request-box-item__count'>{count}</div>
                <div className='request-box-item__title'>{title}</div>
                <div className='request-box-item__point'></div>
            </div>
        )
    }
}
export default RequestBoxItem;