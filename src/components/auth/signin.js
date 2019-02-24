import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SigninForm from './signinForm';

class Signin extends Component {
    
    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <SigninForm onSubmit={(e) => this.onSubmit(e)} />
            </div>
        )
    }
}

export default connect(null, actions)(Signin);