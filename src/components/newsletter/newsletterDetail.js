import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterLatest from './newsletterLatest';
import FormTitle  from '../formTitle';
import { FormButton } from '../formFields';

class NewsletterDetails extends Component {
    componentDidMount() {
        this.props.fetchNewsletterById(this.props.match.params.id)
    }

    openDashboard = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return(
            <div className='newsletter-detail'>
                <FormTitle className='newsletter-detail__title' text='Newsletter Detail'/>
                <NewsletterBox {...this.props.newsletterToEdit}/>
                <NewsletterLatest {...this.props.newsletterToEdit} history={this.props.history}/>
                <FormButton className='newsletter-detail__cancel' small={true} onClick={() => this.openDashboard()} title='Cancel' />
            </div>
        )
    }
}

function mapStateToProps(state){
    const { newsletterToEdit } = state.newsletters 
    return { newsletterToEdit };

}

export default connect(mapStateToProps, actions)(NewsletterDetails);