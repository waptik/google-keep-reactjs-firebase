// eslint-disable-next-line
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ref: https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
class Title extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0]; // get content of title tag(<title></title>)
    }

    render() {
        let fullTitle;
        if(this.props.pageTitle) {
            fullTitle = this.props.siteTitle + " - " + this.props.pageTitle;
        } else {
            fullTitle = this.props.siteTitle;
        }

        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}

Title.defaultProps = {
    pageTitle: null,
    siteTitle: "Waptik",
};

export default Title;