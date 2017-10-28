import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GardenMap from 'components/GardenMap';
import Garden from 'components/Garden';
import GardenGrid from 'components/GardenGrid';
import { selectGarden } from 'store/modules/gardens/actions';

function mapStateToProps(state) {
  const { gardens } = state;
  const { selectedGarden } = gardens;
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
      <div className="col-6">
        {props.selectedGarden ? <Garden garden={props.selectedGarden} /> : <GardenGrid gardens={props.gardens} /> }
      </div>
      <div className="col-6">
        <GardenMap onGardenClick={props.selectGarden} gardens={props.gardens} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
