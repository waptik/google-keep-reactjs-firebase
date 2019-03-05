// eslint-disable-next-line

import React, { Component } from 'react';

import Header from './components/Header';

import './assets/styles/App.css';

// notes components

import AddNoteForm from './components/notes/AddNoteForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header pageTitle="Hi" />

        <AddNoteForm />
      </div>
    );
  }
}

export default App;
