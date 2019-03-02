import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    componentDidMount() {
        this.props.fetchNewsletters();
    }

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    render() {
        const latest = {
            title: 'Happy Holiday',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris. Sed nec purus vitae augue volutpat viverra non quis ligula. Ut eget mauris id tellus sollicitudin sagittis. Fusce euismod dui vel nulla aliquam, id luctus mauris sodales. Phasellus pharetra cursus lacus in pulvinar. Quisque posuere diam non massa sodales aliquam. Suspendisse pellentesque fermentum nibh ut euismod. Cras ac pellentesque turpis. Morbi at orci ultrices, congue lorem in, sodales eros.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        };

        return(
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button'  icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()} />
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest} />
            </div>
        )
    }
}

export default connect(null , actions)(NewsletterGrid);