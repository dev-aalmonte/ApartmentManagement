import React, { Component } from 'react';
import SignupForm from './signupForm';

class Signup extends Component {

    onSubmit = (fields) => {
        console.log("Submiting these fields", fields)
    }

    render() {
        return(
            <div className='sign-up'>
                <SignupForm onSubmit={(e) => this.onSubmit(e)}/>
            </div>
        )
    }
}

export default Signup;