import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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

    handleMoveRequest = (_id, status) => {
        status = status.toLowerCase();
        this.props.changeStatus({_id, status}, () => {
            this.props.fetchRequests();
        });

    }

    render() {
        const {title, body, date, imageUrl, _id, status} = this.props;
        const modifiedDate = new Date(date);

        var moveButtonIcon = 'fas fa-wrench';
        var mainIcon = 'fas fa-exclamation-triangle';

        switch (status) {
            case 'In-Progress':
            case 'in-progress':
                mainIcon = 'fas fa-wrench';
                moveButtonIcon = 'fas fa-check-square';
                break;
                
            case 'Complete':
            case 'complete':
                mainIcon = 'fas fa-check-square';
                moveButtonIcon = 'fas fa-exclamation-triangle';
                break;
        }

        return (
            <div className='request-item' id='request-item'>
                <Icon className='request-item__icon' icon={mainIcon}/>
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
                <Button className='request-item__move' icon={moveButtonIcon} callback={() => this.handleMoveRequest(_id, status)}/>

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

RequestItem = connect(null, actions)(RequestItem);

export default RequestItem;