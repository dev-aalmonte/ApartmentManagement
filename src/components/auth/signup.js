import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';

class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('Navigate to dashboard');
            this.props.history.push('/dashboard');
        });
    }

    render() {
        return(
            <div className='sign-up'>
                <SignupForm onSubmit={(e) => this.onSubmit(e)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signup);