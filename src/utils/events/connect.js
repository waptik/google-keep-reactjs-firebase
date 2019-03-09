import React, { Component, createElement } from "react";
import PropTypes from "prop-types";

export default component => {
  const wrappedComponent = class extends Component {
    render() {
      return createElement(component, {
        ...this.props,
        emit: this.context.emit,
        on: this.context.on,
        off: this.context.off
      });
    }
  };

  wrappedComponent.contextTypes = {
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired
  };

  return wrappedComponent;
};