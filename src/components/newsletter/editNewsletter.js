import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from './editNewsletterForm';

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
                <EditNewsletterForm placeholders={placeholders} formTitle="Edit Newsletter" history={this.props.history} onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

export default connect(null, actions)(EditNewsletter);