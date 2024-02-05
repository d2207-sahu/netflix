import React from 'react'
import Header from '../../components/layouts/Header'
import MainVideoContainerBackground from './HomeContainers/MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import BottomNavBar from '../../components/layouts/BottomNavBar'
import useBrowse from '../../hooks/useBrowse'
import useBase from '../../hooks/useBase'

const HomePage = () => {
  useBrowse();
  useBase();
  return (<>
    <Header />
    <MainVideoContainerBackground />
    <MoviesCarouselContainer />
    <BottomNavBar />
  </>
  )
}
export default HomePage