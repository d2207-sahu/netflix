import React from 'react'
import Header from '../../components/layouts/Header'
import MainVideoContainerBackground from './HomeContainers/MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import BottomNavBar from '../../components/layouts/BottomNavBar'
import Footer from '../../components/layouts/Footer'
import MovieInfoModal from '../../modals/MovieInfoModal'
import MovieModal from '../../modals/MovieModal'
import useBrowse from '../../hooks/useCarouselMoviesList'

const HomePage = () => {
  useBrowse()
  return (<>
    <MovieModal />
    <MovieInfoModal />
    <Header />
    <MainVideoContainerBackground />
    <MoviesCarouselContainer />
    <BottomNavBar />
    <Footer />
  </>
  )
}
export default HomePage