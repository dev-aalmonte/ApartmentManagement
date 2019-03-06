import React, { Component } from 'react';
import { connect } from 'react-redux';

import RequestItem from './requestItem';

class Requests extends Component {
    render() {
        return(
            <div className='requests'>
                {
                    this.props.requests.map(item => {
                        return <RequestItem {...item} key={item._id}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { requests } = state.request;
    return {
        requests
    }

}

export default connect(mapStateToProps)(Requests);