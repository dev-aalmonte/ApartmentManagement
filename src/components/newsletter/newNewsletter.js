import React, { Component } from 'react';
import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
    onSubmit = (fields) => {
        console.log("submiting newsletter");
    }

    render() {
        return(
            <div className='new-newsletter'>
                <NewNewsletterForm formTitle="New Newsletter" history={this.props.history} onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

export default NewNewsletter;