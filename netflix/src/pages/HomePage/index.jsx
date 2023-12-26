import React from 'react'
import Header from '../../components/layouts/Header'
import useCarouselMoviesList from '../../hooks/useCarouselMoviesList'
import MainVideoContainerBackground from './MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import { useSelector } from 'react-redux'
import GPTSearchContainer from './GPTSearchContainer'

export const HomePage = () => {
  useCarouselMoviesList();
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  const showGPT = useSelector(store => store.gpt?.showGPTSliceContainer)


  return (<>
    <Header />
    {showGPT && <GPTSearchContainer />}
    <MainVideoContainerBackground props={movies} />
    <MoviesCarouselContainer />
  </>
  )
}
