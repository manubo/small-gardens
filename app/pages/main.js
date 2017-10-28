import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Main = props => {
  return (
      <div className="row">
          <div className="col-12">
            <div className="main">
                Welcome to Main
            </div>
          </div>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
