import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

class NewNewsletterForm extends Component {
    cancelForm = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text='New Newsletter'/>
                <Field className='new-newsletter-form__newsletter-title' component={FormInput} name='title' type='text' placeholder='Newsletter Title' title='Newsletter Title'/>
                <Field className='new-newsletter-form__body' component={FormTextArea} name='body' type='text' placeholder='Newsletter Body' title='Body'/>
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file' title='Image'/>
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title='Submit'/>                
                <Field className='new-newsletter-form__cancel' onClick={() => { this.cancelForm()}} small={true} component={FormButton} name='cancel' type='button' title='Cancel'/>                
            </form>
        )
    }
}

NewNewsletterForm = reduxForm({
    form: 'newnewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;