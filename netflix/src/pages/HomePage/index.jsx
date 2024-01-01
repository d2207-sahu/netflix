import React from 'react'
import Header from '../../components/layouts/Header'
import useCarouselMoviesList from '../../hooks/useCarouselMoviesList'
import MainVideoContainerBackground from './MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import MovieInfoModal from './MovieInfoModal'
import MovieModal from './MovieModal'
import useFirestoreDB from '../../hooks/useFirestoreDB'

export const HomePage = () => {
  useFirestoreDB();
  const { nowPlayingMovies, topRatedMovies } = useCarouselMoviesList();
  
  return (<>
    <MovieModal  />
    <MovieInfoModal  />
    <Header />
    <MainVideoContainerBackground props={nowPlayingMovies ? nowPlayingMovies : topRatedMovies} />
    <MoviesCarouselContainer />
  </>
  )
}