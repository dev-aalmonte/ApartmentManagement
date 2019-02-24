import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignupForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormTitle className='sign-up-form__title' text='New User'/>
                {/* Changes */}
                <Field className='sign-up-form__fullname' component={FormInput} name='fullname' type='text' placeholder='Enter Your Full Name' title='Full Name'/>
                <Field className='sign-up-form__unit' component={FormInput} name='unit' type='text' placeholder='Enter Unit #' title='Unit #'/>
                {/* End Changes */}
                <Field className='sign-up-form__email' component={FormInput} name='email' type='email' placeholder='Email' title='Email'/>
                <Field className='sign-up-form__password' component={FormInput} name='password' type='password' placeholder='Password' title='Password'/>
                <Field className='sign-up-form__create-account' component={FormButton} name='createAccount' type='submit' title='Create Account'/>

                <div className='sign-up-form__text-links'>
                    <TextLink to='/signin' text='Already Registered? Sign in'/>
                </div>
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;