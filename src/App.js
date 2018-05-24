import React, { Component } from 'react';
import Aside from './Components/Aside'
import Main from './Components/Main'
import './App.css'

export default class extends Component {
    render() {
        return (
            <React.Fragment>
                <Aside />
                <Main />
            </React.Fragment>
        );
    }
}