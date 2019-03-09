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
import Events from './utils/events'


function App () {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.addEventListener('input', event => {
      if (event.target.tagName.toLowerCase() !== 'textarea') {
        return
      }
      autoExpand(event.target)
    }, false)
    
    Events.on('note-selected', note => {
      setShowModal(true)
      setSelectedNote(note)
      document.body.classList.remove('freeze')
    })
    
    Events.on('modal-dismissed', () => {
      setSelectedNote(null)
      setShowModal(false)
      document.body.classList.remove('freeze')
    })
  }, []) // useEffect
  
  const handleUpdate = () => {
    Events.on('note-selected', note => {
      setShowModal(true)
      setSelectedNote(note)
      document.body.classList.remove('freeze')
    })
    
    Events.on('modal-dismissed', () => {
      setSelectedNote(null)
      setShowModal(false)
      document.body.classList.remove('freeze')
    })
  } // handleUpdate
  
  const addNote = (title, content) => {
    const newNotes = [...notes, {title, content}]
    setNotes(newNotes)
  } // addNote
  

  return (
      <div className="app">
        <Header pageTitle="Google Keep Clone With ReactJs + Firebase" />
  
        <AddNoteForm addNote={addNote} />
  
        <AllNotes handleUpdate={handleUpdate} notes={notes}/>
  
        {showModal &&
          <UpdateNoteModal note={selectedNote}/>
        }
      </div>
  )
}

export default App
