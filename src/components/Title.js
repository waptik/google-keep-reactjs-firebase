import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }

    render() {
        let fullTitle;
        if(this.props.pageTitle) {
            fullTitle = this.props.pageTitle + " - " + this.props.siteTitle;
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