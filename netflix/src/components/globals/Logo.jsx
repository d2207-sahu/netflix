import React from "react";
import styled from "styled-components";
import { background_logo_large } from '../../assets';

const LogoImageComponent = styled.img`
  width: 20rem;
  margin-left: 3%;
`;

const Logo = () => {
  return <LogoImageComponent src={background_logo_large} alt="Netflix Logo" />;
};

export default Logo;
