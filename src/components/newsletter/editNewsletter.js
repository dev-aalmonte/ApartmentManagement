import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newNewsletterForm';

class EditNewsletter extends Component {
    onSubmit = (fields) => {
        console.log("submiting newsletter");
    }

    componentDidMount(){
        this.props.fetchNewsletterById(this.props.match.params.id);
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
                <NewNewsletterForm newsletterToEdit={this.props.newsletterToEdit} placeholders={placeholders} formTitle="Edit Newsletter" history={this.props.history} onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        newsletterToEdit
    };
}

export default connect(mapStateToProps, actions)(EditNewsletter);