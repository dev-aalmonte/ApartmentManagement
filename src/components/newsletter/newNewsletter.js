import React, { Component } from 'react';
import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
    onSubmit = (fields) => {
        console.log("submiting newsletter");
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

export default NewNewsletter;