import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return(
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>Title goes here</h1>
                <img className='newsletter-latest__image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest__body'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris. Sed nec purus vitae augue volutpat viverra non quis ligula. Ut eget mauris id tellus sollicitudin sagittis. Fusce euismod dui vel nulla aliquam, id luctus mauris sodales. Phasellus pharetra cursus lacus in pulvinar. Quisque posuere diam non massa sodales aliquam. Suspendisse pellentesque fermentum nibh ut euismod. Cras ac pellentesque turpis. Morbi at orci ultrices, congue lorem in, sodales eros.</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;