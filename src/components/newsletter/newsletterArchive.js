import React, { Component } from 'react';
import { connect } from 'react-redux';

export function ArchiveItem({title, date, _id, callback}){
    const parsedDate = new Date(date);
    return (
        <div className='archive-item' onClick={() => callback(_id)}>
            <a className='archive-item__title'>{ title }</a>
            <div className='archive-item__date'>
                {parsedDate.getMonth() + 1}/{parsedDate.getDate()}/{parsedDate.getFullYear() - 2000}
            </div>
        </div>
    )
}

class NewsletterArchive extends Component {
    openDetails = (id) => {
        this.props.history.push(`newsletter/detail/${id}`);
    }

    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    {
                        this.props.newsletters.map((newsletter, index) => {
                            return <ArchiveItem callback={this.openDetails} key={index} {...newsletter}/>
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