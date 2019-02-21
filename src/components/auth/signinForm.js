import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return(
            <form className='sign-in-form'>
                <FormTitle className='sign-in-form__title' text='Login'/>
                <Field className='sign-in-form__email' component={FormInput} name='email' type='email' placeholder='Email' title='Email'/>
                <Field className='sign-in-form__password' component={FormInput} name='password' type='password' placeholder='Password' title='Password'/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;