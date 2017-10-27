import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ location }) => {
  const { type, routesMap } = location;
  const Component = (routesMap[type] && routesMap[type].component) || null;

  return (
    <div id="app">
      <Component />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default connect(({ location }) => ({ location }))(App);
