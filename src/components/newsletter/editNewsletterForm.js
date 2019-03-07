import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

class EditNewsletterForm extends Component {
    cancelForm = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        const { handleSubmit, formTitle, placeholders } = this.props;

        return(
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text={formTitle}/>
                <Field className='new-newsletter-form__newsletter-title' component={FormInput} name='title' type='text' placeholder={placeholders[0].placeholder} title={placeholders[0].title}/>
                <Field className='new-newsletter-form__body' component={FormTextArea} name='body' type='text' placeholder={placeholders[1].placeholder} title={placeholders[1].title}/>
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file' title={placeholders[2].title}/>
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title='Submit'/>                
                <Field className='new-newsletter-form__cancel' onClick={() => { this.cancelForm()}} small={true} component={FormButton} name='cancel' type='button' title='Cancel'/>                
            </form>
        )
    }
}

EditNewsletterForm = reduxForm({
    form: 'editnewsletter'
})(EditNewsletterForm);

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        initialValues: newsletterToEdit
    };
}

EditNewsletterForm = connect(mapStateToProps)(EditNewsletterForm);

export default EditNewsletterForm;