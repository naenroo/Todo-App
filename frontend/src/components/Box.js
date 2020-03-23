import React from 'react';

import { DivChild, Div, Img, H1 } from './style/Box';

import PropTypes from 'prop-types';

const Box = ({ image, name, title, description }) => (
  <>
    <DivChild>
      <Div>
        <Img src={image} alt={name} />
      </Div>
      <Div>
        <H1>{title}</H1>
      </Div>
      <Div>
        <h5>{description}</h5>
      </Div>
    </DivChild>
  </>
);

Box.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Box;
