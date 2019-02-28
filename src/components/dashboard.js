import React,  { Component } from 'react';

import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';

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
                    component: <h4>Hey There - Request</h4>
                }
            ]
        }
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

export default Dashboard;