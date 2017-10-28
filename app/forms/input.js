import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, type = 'text' }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} className="form-control" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
