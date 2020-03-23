import React from 'react';

import { FooterWrapper } from './style/Footer';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        Todo-App Copyright @{new Date().getFullYear()}
      </FooterWrapper>
    </>
  );
};

export default Footer;
