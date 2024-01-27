import React from 'react'
import Header from '../../components/layouts/Header'
import useCarouselMoviesList from '../../hooks/useCarouselMoviesList'
import MainVideoContainerBackground from './HomeContainers/MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import BottomNavBar from '../../components/layouts/BottomNavBar'
import Footer from '../../components/layouts/Footer'
import MovieInfoModal from '../../modals/MovieInfoModal'
import MovieModal from '../../modals/MovieModal'

const HomePage = () => {
  const { nowPlayingMovies, topRatedMovies } = useCarouselMoviesList();

  return (<>
    <MovieModal />
    <MovieInfoModal />
    <Header />
    <MainVideoContainerBackground movieListData={nowPlayingMovies ? nowPlayingMovies : topRatedMovies} />
    <MoviesCarouselContainer />
    <BottomNavBar />
    <Footer />
  </>
  )
}
export default HomePage