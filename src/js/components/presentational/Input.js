import React from 'react';
import propTypes from 'prop-types';

const Input = ({ label, text, type, id, value, handleChage }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input 
      type={type} 
      className="form-control" 
      id={id} 
      value={value} 
      onChange={handleChage}
      required 
    />
  </div>
);

Input.propTypes = {
  label: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handleChage: propTypes.func.isRequired
};

export default Input;