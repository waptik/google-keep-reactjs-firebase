import React, { Component } from 'react';

import reactLogo from '../img/reactjs-logo.svg';
import firebaseLogo from '../img/firebase-logo.png';
import keepLogo from '../img/keep-logo.png';


let logo = (args) => {
    let text, name; // variables for logo name and file extension

    /**
     * choice:
     * 1. f -> firebase
     * 2. r -> reactjs
     * 3. k -> keep
     */
    if(args == "r") {
        name = reactLogo;
        text = "ReactJs Logo";
    } else if(args == "f") { 
        name = firebaseLogo;
        text = "Firebase Logo";
    } else if (args == "k") {
        name = keepLogo;
        text = "Google Keep Logo";
    }
    
    return (
        <img src={name} alt={text} />
    );
}

export default logo;