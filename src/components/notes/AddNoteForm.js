/* eslint-disable */
import React, { useState } from 'react';
import { db } from '../../utils/firebase';


// using react hooks here
function AddNoteForm() {
    // declaring states
    
    const [titleFieldVisible, setTitleFieldVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    
    const showTitleField = () => {
        setTitleFieldVisible(true);
    };

    
    const hideTitleField = ()  => {
        setTitleFieldVisible(false);
      };

    // submit form
    
    const handleSubmit = e => {
      
    e.preventDefault();
        
        if(title || content) {
            db
            .createNote(title.trim(), content.trim())
            .then(
                () => {
                    // reset all states
                    setTitle('');
                    setContent('');
                    setTitleFieldVisible('false');
                },
                e => console.log(e), // log any error in console
            );
        } 
    }; // end of const
    //<div className="backdrop" onClick={hideTitleField} />

    return (
        <div>
          <div className="create-form">
            <form onSubmit={handleSubmit} className="create-note">
              <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              name="title"
              placeholder="Title"
              />
              <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              name="content"
              placeholder="Take a note"
              />
              <button type="Submit">
                <span>&#43;</span>
              </button>
            </form>
          </div>
        </div>
    );
}

export default AddNoteForm;