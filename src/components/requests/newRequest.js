import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from '../newsletter/newNewsletterForm';

class NewRequest extends Component {
    
    onSubmit = (fields) => {
        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        const userId = this.props._id;
        this.props.createNewRequest(userId, formData, () => {
            this.props.history.push('/dashboard');
        });
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

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { _id };
}

NewRequest = connect(mapStateToProps, actions)(NewRequest);

export default NewRequest;