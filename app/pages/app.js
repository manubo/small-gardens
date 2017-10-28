import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ location }) => {
  const { type, routesMap } = location;
  const Page = (routesMap[type] && routesMap[type].page) || null;

  return (
    <div id="app" className="container-fluid">
      <Page />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default connect(({ location }) => ({ location }))(App);
