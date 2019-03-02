import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from './types';

export function fetchNewsletters() {
    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holiday',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris. Sed nec purus vitae augue volutpat viverra non quis ligula. Ut eget mauris id tellus sollicitudin sagittis. Fusce euismod dui vel nulla aliquam, id luctus mauris sodales. Phasellus pharetra cursus lacus in pulvinar. Quisque posuere diam non massa sodales aliquam. Suspendisse pellentesque fermentum nibh ut euismod. Cras ac pellentesque turpis. Morbi at orci ultrices, congue lorem in, sodales eros.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                title: 'Second Newsletter',
                body: 'Ut eget mauris id tellus sollicitudin sagittis. Fusce euismod dui vel nulla aliquam, id luctus mauris sodales. Phasellus pharetra cursus lacus in pulvinar. Quisque posuere diam non massa sodales aliquam. Suspendisse pellentesque fermentum nibh ut euismod. Cras ac pellentesque turpis. Morbi at orci ultrices, congue lorem in, sodales eros.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }
    
    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}

export function fetchNewsletterById(id){
    return {
        type: FETCH_NEWSLETTER_ID, 
        payload: id
    }
}