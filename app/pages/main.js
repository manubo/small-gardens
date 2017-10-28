import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GardenMap from 'components/GardenMap'

function mapStateToProps(state) {
    const { gardens } = state;
    const { selectedGarden } = gardens;
    return {
        gardens: gardens.entities,
        selectedGarden
    };
}

function mapDispatchToProps(dispatch) {
  return {
      selectGarden: garden => dispatch(selectGarden(garden))
  };
}

const Main = props => {
  return (
      <div className="row">
          <div className="col-12">
            <div className="main">
                <GardenMap onGardenClick={props.selectGarden} gardens={props.gardens} />
            </div>
          </div>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
