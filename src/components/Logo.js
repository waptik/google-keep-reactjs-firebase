import React, { Component } from 'react';

import reactjs-logo from '../img/reactjs-logo.svg';
import firebase-logo from '../img/firebase-logo.png';
import keep-logo from '../img/keep-logo.png';


let logo = (args) => {
    let text, name; // variables for logo name and file extension

    /**
     * choice:
     * 1. f -> firebase
     * 2. r -> reactjs
     * 3. k -> keep
     */
    if(args == "r") {
        name = reactjs-logo;
        text = "ReactJs Logo";
    } else if(args == "f") { 
        name = firebase-logo;
        text = "Firebase Logo";
    } else if (args == "k") {
        name = keep-logo;
        text = "Google Keep Logo";
    }
    
    return (
        <img src={name} alt={text} />
    );
}

export default logo;