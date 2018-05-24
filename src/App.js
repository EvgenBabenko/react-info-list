import React, { Component } from 'react';
import Aside from './components/Aside'
import Main from './components/Main'
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