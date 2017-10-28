import React, { Component } from 'react';
import {range} from 'ramda';

const Leaves = props => {
    return range(0, props.count).map((_item, index) => {
        return <i key={index} className="fa fa-pagelines fa-2x"></i>
    })
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Garden extends Component {
  render() {
    const { garden } = this.props;
    return (
      <div>
        <div className="mb-3" style={{
            with: '100%',
            height: '50vh',
            backgroundImage: `url(${require(`assets/images/gardens/${garden.id}.png`)})`,
            backgroundSize: 'cover',
          }}
        />
        <h1>{garden.name}</h1>
        <h2 className="text-muted">{garden.city}</h2>
        <div className="row">
          <div className="col-6">
            <Leaves count={getRandomInt(1, 5)}/>
          </div>
          <div className="col-6 text-right">
            <h3>{garden.size}</h3>
          </div>
        </div>
      </div>
    );
  }
}
