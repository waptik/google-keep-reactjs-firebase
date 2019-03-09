/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types' // proptypes

import DeleteIcon from './icons/DeleteIcon'// delete icon


import Events from '../../utils/events' //eventbus


function UpdateNoteModal({note, index}) {

    //state
    const [mutableNote, setMutableNote] = useState(note)

    const dismissModal = () => {
        Events.emit('modal-dismissed');
    }

    //stop propagation
    const stopPropagation = e => {
        e.stopPropagation()
    }

    // submit form
    const handleSubmit = e => {
      
    e.preventDefault()
        
      const id = mutableNote.id;
      const title = mutableNote.title;
      const content = mutableNote.content;

      db.updateNote(
        id,
        title,
        content,
        () => {
          dismissModal();
        },
        err => {
          console.error(err);
        },
      ); 
    } // end of handleSubmit
    
    const handleDelete = e => {
      
    e.preventDefault()
        
        
      const id = mutableNote.id;

      if (window.confirm('Do you really want to delete this note?')) {
        db.deleteNote(id).then(
          () => {
            this.dismissModal();
          },
          err => {
            console.error(err);
          },
        );
      }
    } // end of handleDelete

    return (
        <div>
            {note && (
                <div className="modal-backdrop" onClick={dismissModal}>
                    <div
                    class="modal"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalContent"
                    >
                        <form
                            onSubmit={handleSubmit}
                            onClick={stopPropagation}
                            className="edit-form"
                        >
                            <input
                            id="modalTitle"
                            v-model="mutableNote.title"
                            name="title"
                            placeholder="Title"
                            />
                
                            <textarea
                            id="modalContent"
                            value={mutableNote.content}
                            name="content"
                            placeholder="Add a note..."
                            rows="8"
                            />
                
                            <footer class="modal-footer">
                            <button
                                onClick={handleDelete}
                                type="button"
                                class="delete-button"
                            >
                                <DeleteIcon />
                            </button>
                            <button type="submit" class="submit-button">
                                <span>Done</span>
                            </button>
                            </footer>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default UpdateNoteModal;