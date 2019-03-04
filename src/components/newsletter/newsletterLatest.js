import React, { Component } from 'react';

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

export default NewsletterLatest;