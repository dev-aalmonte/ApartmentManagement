import React, { Component } from 'react';
import { connect } from 'react-redux';

import RequestItem from './requestItem';

class Requests extends Component {
    render() {
        return(
            <div className='requests'>
                {
                    this.props.requests.map(item => {
                        const {selectedRequestType} = this.props;
                        if (item.status == selectedRequestType.toLowerCase())
                            return <RequestItem {...item} key={item._id}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { requests, selectedRequestType } = state.request;
    return {
        requests,
        selectedRequestType
    }

}

export default connect(mapStateToProps)(Requests);