import React,  { Component } from 'react';

import TabNav from './tabnav';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <h4>Hey There - Newsletter</h4>
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