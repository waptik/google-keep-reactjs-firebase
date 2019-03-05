// eslint-disable-next-line
import React from 'react';

import reactLogo from '../assets/img/reactjs-logo.svg';
import firebaseLogo from '../assets/img/firebase-logo.png';
import keepLogo from '../assets/img/keep-logo.png';


let logo = (args) => {
    let text, name; // variables for logo name and file extension

    /**
     * choice:
     * 1. f -> firebase
     * 2. r -> reactjs
     * 3. k -> keep
     */
    if(args === "r") {
        name = reactLogo;
        text = "ReactJs Logo";
    } else if(args === "f") { 
        name = firebaseLogo;
        text = "Firebase Logo";
    } else if (args === "k") {
        name = keepLogo;
        text = "Google Keep Logo";
    }
    
    //render() {
        return (
            <div>
                <img src={name} alt={text} />
            </div>
        );
    //}
}

export default logo;