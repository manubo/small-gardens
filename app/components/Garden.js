import React, { Component } from 'react';

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
            <h3>&#9733;&#9733;&#9733;&#9733;&#9734;</h3>
          </div>
          <div className="col-6 text-right">
            <h3>{garden.size}</h3>
          </div>
        </div>
      </div>
    );
  }
}
