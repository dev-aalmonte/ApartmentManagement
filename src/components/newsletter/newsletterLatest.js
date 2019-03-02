import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';

class NewsletterLatest extends Component {

    handleEdit = (id) => {
        this.props.history.push(`/newsletter/edit/${id}`);
    }

    render() {
        const { title, imageUrl, body, _id } = this.props;
        return(
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={imageUrl}/>
                <Button className='newsletter-latest__button' callback={() => this.handleEdit(_id)} icon='fas fa-pencil-alt'/>
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}

export default connect(mapStatetoProps)(NewsletterLatest);