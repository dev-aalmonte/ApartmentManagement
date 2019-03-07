import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
    onSubmit = (fields) => {
        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.createNewNewsletter(formData, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const placeholders = [
            {
                title: 'Newsletter Title',
                placeholder: 'Newsletter Title'
            },
            {
                title: 'Body',
                placeholder: 'Newsletter Body'
            },
            {
                title: 'Image',
                placeholder: 'Image'
            }
        ];
        return(
            <div className='new-newsletter'>
                <NewNewsletterForm formTitle="New Newsletter" placeholders={placeholders} history={this.props.history} onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

NewNewsletter = connect(null, actions)(NewNewsletter);

export default NewNewsletter;