import React, { Component } from 'react';
import { connect } from 'react-redux';

export function ArchiveItem({title, date}){
    return (
        <div className='archive-item'>
            <div className='archive-item__title'>{ title }</div>
            <div className='archive-item__date'>
                {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear() - 2000}
            </div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    {
                        this.props.newsletters.map((newsletter, index) => {
                            return <ArchiveItem key={index} {...newsletter}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { newsletters } = state.newsletters;
    return {
        newsletters
    }
}

export default connect(mapStateToProps)(NewsletterArchive);