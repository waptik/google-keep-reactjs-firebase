/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// ref: https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
function Title ({ pageTitle, siteTitle}) {

    const titleEl = document.getElementsByTagName("title")[0]; // get content of title tag(<title></title>)

    let fullTitle;
        
    //console.log(pageTitle);

    if(pageTitle) {
        fullTitle = siteTitle + " - " + pageTitle;
    } else {
        fullTitle = siteTitle;
    }

    return ReactDOM.createPortal(
        fullTitle || "",
        titleEl
    );
}


Title.propTypes = {
    pageTitle: PropTypes.string,
    siteTitle: PropTypes.string,
};

Title.defaultProps = {
    pageTitle: "",
    siteTitle: "Waptik",
};

export default Title;