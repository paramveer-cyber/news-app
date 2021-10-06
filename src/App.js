import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Kal Tak" />
        <News category="general" country="in" apiKey="6ca9cac1c58342e3a9b7d34f03b7129d" pageSize={9} />
      </div>
    )
  }
}

