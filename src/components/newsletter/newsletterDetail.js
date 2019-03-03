import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetails extends Component {
    componentDidMount() {
        this.props.fetchNewsletterById(this.props.match.params.id)
    }

    render() {
        console.log("Newsletter Details: ", this.props.newsletterToEdit);
        return(
            <div className='newsletter-detail'>
                Newsletter Details
            </div>
        )
    }
}

function mapStateToProps(state){
    const { newsletterToEdit } = state.newsletters 
    return { newsletterToEdit };

}

export default connect(mapStateToProps, actions)(NewsletterDetails);