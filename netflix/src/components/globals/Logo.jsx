import React from "react";
import styled, { css } from "styled-components";
import { background_logo_large } from '../../assets';
import { useLocation, useNavigate } from "react-router-dom";
import { routingConfig } from "../../router/routing-config";

const LogoImageComponent = styled.img`
  width: 20rem;
  margin-left: 1.5%;
  cursor: pointer;
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
  const { pathname } = useLocation();
  const { navigate } = useNavigate()
  return <LogoImageComponent
    onClick={() => {
      if (!(pathname === routingConfig.home))
        navigate(routingConfig.home)
    }}
    src={background_logo_large}
    alt="Netflix Logo"
  />;
};

export default Logo;
