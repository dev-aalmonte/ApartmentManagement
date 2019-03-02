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
        return(
            <div className='new-newsletter'>
                <NewNewsletterForm newsletterToEdit={this.props.newsletterToEdit} formTitle="Edit Newsletter" history={this.props.history} onSubmit={(e) => this.onSubmit(e)} />
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