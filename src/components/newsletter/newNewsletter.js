import React, { Component } from 'react';
import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
    onSubmit = (fields) => {
        console.log("submiting newsletter");
    }

    render() {
        return(
            <div className='new-newsletter'>
                <NewNewsletter onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

export default NewNewsletter;