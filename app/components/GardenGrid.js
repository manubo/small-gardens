import React, { Component } from 'react';

export default class Garden extends Component {
  render() {
    const { gardens } = this.props;
    return (
      <div className="row align-items-stretch">
        {gardens.map(garden => (
          <div className="col-4 mb-4" key={garden.id}>
            <div className="card" style={{ height: '100%' }}>
              <img
                className="card-img-top"
                src={require(`assets/images/gardens/${garden.id}.png`)}
                alt={garden.title}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div className="card-block">
                <div className="cart-title">
                  <h4>{garden.name}</h4>
                </div>
                <p className="text-muted">{garden.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
