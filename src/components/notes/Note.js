/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // proptypes

import EditIcon from './icons/EditIcon';// edit icon


function Note(props) {

    const propTypes = {
        note: PropTypes.object.isRequired,
    };

    const selectNote = (e) => {

    }
    
    const {note} = props;

    //console.log(note)
    
    return (
        <div>
            <div className="note" onClick={selectNote(note)}>
                {(note.title || note.content) ? ( 
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
                {
                    
                }
            </div>
        </div>
    );
    
}

export default Note;