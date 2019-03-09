import React, { Component } from "react";
import PropTypes from "prop-types";

const addEvent = (key, handle) => ({ events }) => {
  const nextEvents = { ...events };

  const currentHandles = events[key] || [];
  nextEvents[key] = [...currentHandles, handle];

  return { events: nextEvents };
};

const removeEvent = (key, handle) => ({ events }) => {
  const nextEvents = {};

  for (const currentKey in events) {
    if (currentKey === key) {
      const nextHandles = [];

      for (const currentHandle of events[currentKey]) {
        if (currentHandle !== handle) {
          nextHandles.push(currentHandle);
        }
      }

      nextEvents[currentKey] = nextHandles;
    }
  }

  return { events: nextEvents };
};

const callEvent = (handlers = []) => ({ detail }) => {
  for (const handle of handlers) {
    handle(detail);
  }
};

class EmitProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {},
      element: props.element || window
    };
  }

  getChildContext() {
    const emit = (name, props) => this.emit(name, props);
    const on = (name, handle) => this.on(name, handle);
    const off = (name, handle) => this.off(name, handle);
    return { emit, on, off };
  }

  emit(name, props) {
    const element = this.state.element;
    const handle = callEvent(this.state.events[name]);
    const event = new CustomEvent(name, { detail: props });
    element.addEventListener(name, handle);
    element.dispatchEvent(event);
    element.removeEventListener(name, handle);
  }

  on(name, handle) {
    this.setState(addEvent(name, handle));
  }

  off(name, handle) {
    this.setState(removeEvent(name, handle));
  }

  render() {
    return React.createElement(React.Fragment, null, this.props.children);
  }
}

EmitProvider.childContextTypes = {
  emit: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
  off: PropTypes.func.isRequired
};

export default EmitProvider;