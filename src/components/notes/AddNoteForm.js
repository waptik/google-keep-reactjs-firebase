// eslint-disable-next-line
import React, { useState } from 'react';
import { db } from '../../utils/firebase';


// using react hooks here
function AddNoteForm() {

    // declaring states
    // eslint-disable-next-line
    const [titleFieldVisible, setTitleFieldVisible] = useState(false);// eslint-disable-next-line
    const [title, setTitle] = useState('');// eslint-disable-next-line
    const [content, setContent] = useState('');// eslint-disable-next-line

    // eslint-disable-next-line
    const showTitleField = () => {
        setTitleFieldVisible(true);
    };

    // eslint-disable-next-line
    const hideTitleField = ()  => {
        setTitleFieldVisible(false);
      };

    // submit form
    // eslint-disable-next-line
    const handleSubmit = (e) => {
        
        if(this.state.title || this.state.content) {
            db
            .createNote(this.state.title.trim(), this.state.content.trim())
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

    return (
        <div>
          <div className="create-form">
            <div className="backdrop"></div>
            <form onSubmit={handleSubmit} className="create-note">
              <input
              type="text"
              name="title"
              placeholder="Title"
              />
              <textarea
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