/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types' // proptypes

import EditIcon from './icons/EditIcon'// edit icon


import Events from '../../utils/events' //eventbus


function Note({ note, index }) {

    const selectNote = (note) => {
        Events.emit('note-selected', note)
    }

    const hasNotes = (note.title || note.content)
    
    //console.log(note)
    
    return (
        <div className="note" onClick={selectNote(note)}>
                <EditIcon />
                {hasNotes ? ( 
                        <div>
                            {note.title && 
                                <h1>{note.title }</h1>
                            }
                            {note.content &&
                                <pre>{note.content}</pre>
                            }
                        </div>
                ) : (
                    <div className="empty">
                        Empty Note
                    </div>
                )}
        </div>
    )
    
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
};

export default Note