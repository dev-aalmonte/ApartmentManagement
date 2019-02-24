import React,  { Component } from 'react';

class Tabnav extends Component {
    render(){

        var JSX = [
            <h1>tabs</h1>
        ];

        this.props.tabs.map((tab, index) => {
            JSX.push(tab.component);
            // console.log(tab);
        })

        return JSX;
    }
}

export default Tabnav;