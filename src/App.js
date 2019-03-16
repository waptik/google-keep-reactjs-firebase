/* eslint-disable */

import React, { useState, useEffect } from 'react'

import Header from './components/Header'

import './assets/styles/App.css'

// notes components
import AddNoteForm from './components/notes/AddNoteForm'
import AllNotes from './components/notes/AllNotes'
import UpdateNoteModal from './components/notes/UpdateNoteModal'

// utilities

import { autoExpand } from './utils'
import Emitter from './utils/events'


function App () {
	
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const noteSelected = note => {
    setShowModal(true)
    setSelectedNote(note)
    document.body.classList.remove('freeze')
    console.log(note, ' is selected!');
  }

  const closeModal = () => {
    setSelectedNote(null)
    setShowModal(false)
    document.body.classList.remove('freeze')
    console.log('No note is selected and modal is not active!');
  }

  useEffect(() => {
    
    document.addEventListener('input', event => {
      if (event.target.tagName.toLowerCase() !== 'textarea') {
        return
      }
      autoExpand(event.target)
    }, false)
    
  }, []) // useEffect
  

  return (
      <div className="app">
        <Header pageTitle="Google Keep Clone With ReactJs + Firebase" />
  
        <AddNoteForm />

        <AllNotes selected={noteSelected}/>
  
        {showModal &&
          <UpdateNoteModal modal={closeModal} note={selectedNote}/>
        }
      </div>
  )
}

export default App
