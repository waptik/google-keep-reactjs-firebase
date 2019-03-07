/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// ref: https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
class Title extends Component {

    static propTypes = {
        pageTitle: PropTypes.string,
        siteTitle: PropTypes.string,
    };

    static defaultProps = {
        pageTitle: "Google Keep Clone with Firebase",
        siteTitle: "Waptik",
    };

    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0]; // get content of title tag(<title></title>)
    }

    render() {
        let fullTitle;

        let { pageTitle, siteTitle } = this.props;
        
    console.log(pageTitle);

        if(pageTitle) {
            fullTitle = siteTitle + " - " + pageTitle;
        } else {
            fullTitle = siteTitle;
        }

        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}

export default Title;