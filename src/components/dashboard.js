import React,  { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';
import RequestGrid from './requests/requestGrid';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid history={this.props.history}/>
                },
                {
                    title: 'Request',
                    active: false,
                    component: <RequestGrid history={this.props.history}/>
                }
            ]
        }
    }

    componentDidMount(){
        this.props.updateHeader(`Welcome ${this.props.fullname}`, 'HOA Management', true);
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;
        tabs.map(tab => {
            tab.active = false;
            if(tab.title == title) {
                tab.active = true;
            }
        });

        this.setState({ tabs });
    };

    render(){
        return(
            <div className='dashboard'>
                <TabNav tabs={this.state.tabs} handleTabChange={(title) => this.handleTabChange(title)} />
            </div>
        ) 
    }
}

function mapStateToProps(state){
    const {user} = state.auth;
    return {
        ...user
    }
}

Dashboard = connect(mapStateToProps, actions)(Dashboard);

export default Dashboard;