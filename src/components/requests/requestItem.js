import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

import { ROOT_URL } from '../../config';

class RequestItem extends Component {
    constructor(){
        super();

        this.state = {
            height: 0
        }
    }

    toggleDropdown = (e) => {
        var element = e.target.nodeName == 'I' ? e.target.parentNode.parentNode.parentNode : e.target.parentNode.parentNode;
        var height = this.state.height == 0 ? 'auto' : 0;
        
        if(height) {
            element.classList.add('bg-F8');
        }
        else {
            element.classList.remove('bg-F8');
        }

        this.setState({height});
    }

    handleMoveRequest = (id) => {
        console.log("Trying to move a request: ", id);
    }

    render() {
        const {title, body, date, imageUrl, _id} = this.props;
        const modifiedDate = new Date(date);
        return (
            <div className='request-item' id='request-item'>
                <Icon className='request-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='request-item__title' onClick={(e) => this.toggleDropdown(e)}>
                    <div className='request-item__title__text'>
                        {title}
                    </div>
                    <Icon className='request-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='request-item__tenant-unit'>
                    Adonis - Unit 115
                </div>
                <div className='request-item__date'>
                    {modifiedDate.getMonth() + 1}/{modifiedDate.getDate()}/{modifiedDate.getFullYear() - 2000}
                </div>
                <Button className='request-item__move' icon='fas fa-wrench' callback={() => this.handleMoveRequest(_id)}/>

                <div className='request-item__description'>
                    <AnimateHeight duration={300} height={this.state.height}>
                        <div className='item-description'>
                            <img src={`${ROOT_URL}/${imageUrl}`} className='item-description__img'/>
                            <p className='item-description__text'>
                                {body}
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestItem;