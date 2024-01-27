import React from 'react';
import useMobile from '../../../hooks/useMobile';
import MovieMobileHomeContainer from './MovieMobileHomeContainer';
import MovieDesktopHomeContainer from './MovieDesktopHomeContainer';

const MainVideoContainerBackground = ({ movieListData }) => {
  const { isMobile } = useMobile();

  return movieListData ? (
    isMobile ? (
      <MovieMobileHomeContainer movieDetailData={movieListData[0]} />
    ) : (
      <MovieDesktopHomeContainer movies={movieListData} />
    )
  ) : (
    <div className="mt-[25%] mb-5 w-screen rounded-xl min-h-[50%] block sm:hidden"></div>
  );
};

export default MainVideoContainerBackground;