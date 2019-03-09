/* eslint-disable */
import React, { useState, useEffect } from 'react';

import Note from './Note';

import { db } from '../../utils/firebase'; // import firebase


function AllNotes({ /* notes, handleUpdate */ }) {

    //ref: https://scotch.io/tutorials/getting-started-with-react-hooks

    // declare notes as state with value of an empty array []
    const [notes, setNotes] = useState([]); // empty array

    //fetch all notes inside useEffect
    useEffect(() => {
        db.getNotes(snapshot => {
            const notes = snapshot.val();
            // Make sure the notes show up in reverse chronological order
            setNotes(
                Object.keys(notes)
                .map(i => notes[i])
                .reverse()
              ); // set notes in state
          }
        ); //end of db
    }, []);// empty array because we only run once

    //console.log(db.getNotes)
    //console.log(db.fire.ref('notes').on('value'))
    
    return (
        <div className="notes">
        
            {notes.map((note, index) => (
                
                <Note key={index} index={index}  note={note} />
                // <Note key={index} handleUpdate={handleUpdate} index={index}  note={note} />
            ))}
        </div>
    );
    
}

export default AllNotes;