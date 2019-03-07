import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from './editNewsletterForm';

class EditNewsletter extends Component {
    onSubmit = (fields) => {
        const { title, body, image } = fields;
        const itemId = this.props.match.params.id;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.editNewsletter(itemId, formData, () => {
            this.props.history.push('/dashboard');
        });
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