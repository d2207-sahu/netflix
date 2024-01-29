import React from "react";
import styled, { css } from "styled-components";
import { background_logo_large, background_logo_small } from '../assets';
import { useLocation, useNavigate } from "react-router-dom";
import { routingConfig } from "../router/routing-config";
import { useDispatch } from "react-redux";
import { toggleSearchSliceContainer, updateSearchText } from "../redux/slices/searchSlice";

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
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate()

  const browseHomeHandler = () => {
    dispatch(updateSearchText(''));
    dispatch(toggleSearchSliceContainer());
    if (!(pathname === routingConfig.home))
      navigate(routingConfig.home)
  }
  return <>
    <LogoImageComponent
      onClick={browseHomeHandler}
      loading="lazy"
      className="w-[2.5rem] m-[2rem] block sm:hidden"
      src={background_logo_small}
      alt="Netflix Logo"
    />
    <LogoImageComponent
      onClick={browseHomeHandler}
      className="ml-[1.5%] w-[20rem] hidden sm:block"
      src={background_logo_large}
      alt="Netflix Logo"
      loading="lazy"
    />
  </>;
};

export default Logo;
