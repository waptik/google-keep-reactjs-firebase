/* eslint-disable */

import React, { Component } from 'react';

import Header from './components/Header';

import './assets/styles/App.css';

// notes components

import AddNoteForm from './components/notes/AddNoteForm';
import AllNotes from './components/notes/AllNotes';
import UpdateNoteModal from './components/notes/UpdateNoteModal';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header pageTitle="Kill" />

        <AddNoteForm />
        <AllNotes />
        <UpdateNoteModal />
      </div>
    );
  }
}

export default App;
