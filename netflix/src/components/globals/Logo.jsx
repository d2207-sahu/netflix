import React from "react";
import styled, { css } from "styled-components";
import { background_logo_large, background_logo_small } from '../../assets';
import { useLocation, useNavigate } from "react-router-dom";
import { routingConfig } from "../../router/routing-config";

const LogoImageComponent = styled.img`
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
  const navigate = useNavigate()
  return <>
    <LogoImageComponent
      onClick={() => {
        if (!(pathname === routingConfig.home))
          navigate(routingConfig.home)
      }}
      loading="lazy"
      className="w-[2.5rem] m-[2rem] block sm:hidden"
      src={background_logo_small}
      alt="Netflix Logo"
    />
    <LogoImageComponent
      onClick={() => {
        if (!(pathname === routingConfig.home))
          navigate(routingConfig.home)
      }}
      className="ml-[1.5%] w-[20rem] hidden sm:block"
      src={background_logo_large}
      alt="Netflix Logo"
      loading="lazy"
    />
  </>;
};

export default Logo;
