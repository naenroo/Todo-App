import React from 'react';

import PropTypes from 'prop-types';

import { Label, InputForm } from './style/Input';

const Input = ({ type, title, name, placeholder, onChange, value }) => (
  <>
    <Label>{title}</Label>
    <InputForm
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </>
);

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
