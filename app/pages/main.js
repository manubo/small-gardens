import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GardenMap from 'components/GardenMap';
import { selectGarden } from 'store/modules/gardens/actions';

function mapStateToProps(state) {
  const { gardens } = state;
  const { selectedGarden } = gardens;
  console.log(selectedGarden);
  return {
    gardens: gardens.entities,
    selectedGarden,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectGarden: garden => dispatch(selectGarden(garden)),
  };
}

const Main = props => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="main">
          <GardenMap
            onGardenClick={props.selectGarden}
            gardens={props.gardens}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
