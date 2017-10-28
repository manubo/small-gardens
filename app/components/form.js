import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    attrs: {},
  };

  render() {
    const { children } = this.props;

    return <div className="form">{children}</div>;
  }
}
