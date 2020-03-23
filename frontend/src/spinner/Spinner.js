import React from 'react';

import { SpinnerWrapper } from '../spinner/SpinnerStyle';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <svg>
        <circle cx="70" cy="70" r="70" />
      </svg>
    </SpinnerWrapper>
  );
};

export default Spinner;
