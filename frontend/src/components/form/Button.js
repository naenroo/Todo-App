import React from 'react';

import { ButtonSubmit } from './style/Button';

const Button = ({ name, type }) => (
  <>
    <ButtonSubmit type={type}>{name}</ButtonSubmit>
  </>
);

export default Button;
