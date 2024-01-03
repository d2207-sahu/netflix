import React from "react";
import styled, { css } from "styled-components";
import { background_logo_large } from '../../assets';

const LogoImageComponent = styled.img`
  width: 20rem;
  margin-left: 1.5%;
  @media only screen and (max-width: 767px) {
        /* Mobile styles */
        ${({ $mobileStyles }) => $mobileStyles && css`${$mobileStyles}`}
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        /* Tablet styles */
        ${({ $tabletStyles }) => $tabletStyles && css`${$tabletStyles}`}
    }

`;

const Logo = () => {
  return <LogoImageComponent
    src={background_logo_large}
    alt="Netflix Logo"
  />;
};

export default Logo;
