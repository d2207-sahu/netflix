import React from 'react';
import useMobile from '../../../hooks/useMobile';
import MovieMobileHomeContainer from './MovieMobileHomeContainer';
import MovieDesktopHomeContainer from './MovieDesktopHomeContainer';
import { useSelector } from 'react-redux';

const MainVideoContainerBackground = () => {
  const { isMobile } = useMobile();
  const { browse } = useSelector(state => state.movies);
  if (!browse || !(browse?.banner)) return <></>;
  return isMobile ? <MovieMobileHomeContainer /> : <MovieDesktopHomeContainer />;
};

export default MainVideoContainerBackground;