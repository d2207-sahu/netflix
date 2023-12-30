import React, { useEffect } from 'react'
import Header from '../../components/layouts/Header'
import useCarouselMoviesList from '../../hooks/useCarouselMoviesList'
import MainVideoContainerBackground from './MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import { useSelector } from 'react-redux'

export const HomePage = () => {
  useCarouselMoviesList();
  const { nowPlayingMovies, topRatedMovies } = useSelector(store => store.movies);

  useEffect(() => {
    const handleScroll = () => {
      // const scrollPosition = window.scrollY;
      // const gradientStartColor = `rgba(0, 0, 0, ${scrollPosition / 200})`;
      // scrollRef.current.style.background = `linear-gradient(to bottom, ${gradientStartColor}, black)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (<>
    <Header />
    <MainVideoContainerBackground props={nowPlayingMovies ? nowPlayingMovies : topRatedMovies?.reverse()} />
    <MoviesCarouselContainer />
  </>
  )
}