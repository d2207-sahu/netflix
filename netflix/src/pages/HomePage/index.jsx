import React from 'react'
import Header from '../../components/layouts/Header'
import useCarouselMoviesList from '../../hooks/useCarouselMoviesList'
import MainVideoContainerBackground from './MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import { useSelector } from 'react-redux'

export const HomePage = () => {
  useCarouselMoviesList();
  const { nowPlayingMovies, topRatedMovies } = useSelector(store => store.movies)

  return (<>
    <Header />
    <MainVideoContainerBackground props={nowPlayingMovies ? nowPlayingMovies : topRatedMovies?.reverse()} />
    <MoviesCarouselContainer />
  </>
  )
}