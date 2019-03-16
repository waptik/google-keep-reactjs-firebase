/* eslint-disable */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types' // proptypes

import EditIcon from './icons/EditIcon'// edit icon


function Note({ note, index, selected }) {

    const hasNotes = (note.title || note.content)

    const editNote = () => {
        selected(note)
    }
    
    //console.log(note)
    
    return (
        <div className="note" index={index}>
			<div
				onClick={editNote}
			>
				<EditIcon />
            </div>
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