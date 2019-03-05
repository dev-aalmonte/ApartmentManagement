import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestItem extends Component {
    constructor(){
        super();

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        var height = this.state.height == 0 ? 'auto' : 0;
        console.log("Height:",height);
        this.setState({height});
    }

    handleMoveRequest = () => {
        console.log("Trying to move a request");
    }

    render() {
        return (
            <div className='request-item'>
                <Icon className='request-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='request-item__title' onClick={() => this.toggleDropdown()}>
                    <div className='request-item__title__text'>
                        Yo my door fell out
                    </div>
                    <Icon className='request-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='request-item__tenant-unit'>
                    Adonis - Unit 115
                </div>
                <div className='request-item__date'>
                    09/15/15
                </div>
                <Button className='request-item__move' icon='fas fa-wrench' callback={() => this.handleMoveRequest()}/>

                <div className='request-item__description'>
                    <AnimateHeight duration={300} height={this.state.height}>
                        <div className='item-description'>
                            <img src='http://via.placeholder.com/160x94' className='item-description__img'/>
                            <p className='item-description__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris. Sed nec purus vitae augue volutpat viverra non quis ligula. Ut eget mauris id tellus sollicitudin sagittis. Fusce euismod dui vel nulla aliquam, id luctus mauris sodales. Phasellus pharetra cursus lacus in pulvinar. Quisque posuere diam non massa sodales aliquam. Suspendisse pellentesque fermentum nibh ut euismod. Cras ac pellentesque turpis. Morbi at orci ultrices, congue lorem in, sodales eros.
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestItem;