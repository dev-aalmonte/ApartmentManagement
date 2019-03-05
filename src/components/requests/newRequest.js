import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newNewsletterForm';

class NewRequest extends Component {
    
    onSubmit = fields => {
        this.props.history.push('dashboard');
    }
    
    render() {
        const placeholders = [
            {
                title: 'Service Request Title',
                placeholder: 'Service Request Title'
            },
            {
                title: 'Description',
                placeholder: 'Service Request Description'
            },
            {
                title: 'Image',
                placeholder: 'Image'
            }
        ];
        return(
            <div className='new-request'>
                <NewNewsletterForm onSubmit={e => this.onSubmit(e)} placeholders={placeholders} formTitle='New Request' history={this.props.history}/>
            </div>
        )
    }
}

export default NewRequest;